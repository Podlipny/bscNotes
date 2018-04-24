import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../core/resource.service';
import { NotesService } from '../core/notes.service';
import { BusyService } from '../core/busy.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { INote } from '../core/INote';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  isReadMode: boolean = true;
  id: number = null;
  note: INote = null;

  detailForm: FormGroup;

  idFormControl = new FormControl('');
  titleFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(255),
  ]);

  constructor(public resources: ResourceService,
              private notesService: NotesService,
              private busy: BusyService,
              private route: ActivatedRoute,
              private router: Router,
              private location: Location) {
    this.detailForm = new FormGroup({
      id: this.idFormControl,
      title: this.titleFormControl
    });

    this.busy.show();
    this.id = this.route.snapshot.params['id'];


    if (this.route.snapshot.params['operation'] === 'edit') {
      this.isReadMode = false;
    }
  }

  ngOnInit() {
    this.notesService.getNote(this.id).subscribe((note: INote) => {
      // always returns this valu from mock 'Buy cheese and bread for breakfast.'
      this.idFormControl.setValue(note.id);
      this.titleFormControl.setValue(note.title);
      this.busy.hide();
    });
  }

  editNote(formValues: any) {
    this.busy.show();
    const editedNote: INote = {
      id: formValues.id,
      title: formValues.title
    };

    // we are sending edited note element to server - will not have any impact to
    // internal collection in Note.Service, because we can't trully create new items
    // - mock API will always return item ID 3
    this.notesService.editNote(editedNote).subscribe((note: INote) => {
      // always returns this valu from mock 'Buy cheese and bread for breakfast.'
      this.titleFormControl.setValue(note.title);
      this.busy.hide();
      this.router.navigate(['/']);
    }, err => console.log(err));
  }

  back() {
    this.location.back();
  }

}

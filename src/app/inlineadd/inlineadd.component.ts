import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../core/resource.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { INote } from '../core/INote';
import { NotesService } from '../core/notes.service';
import { BusyService } from '../core/busy.service';

@Component({
  selector: 'app-inlineadd',
  templateUrl: './inlineadd.component.html',
  styleUrls: ['./inlineadd.component.scss']
})
export class InlineaddComponent implements OnInit {
  inlineAddForm: FormGroup;

  titleFormControl = new FormControl('', [
    Validators.required,
    Validators.maxLength(255),
  ]);

  constructor(public resources: ResourceService,
              private notesService: NotesService,
              private busy: BusyService) {
    this.inlineAddForm = new FormGroup({
      title: this.titleFormControl
    });
  }

  ngOnInit() {
  }

  addNote(form: any) {
    this.busy.show();
    const newNote: INote = {
      id: this.notesService.getMaxId(),
      title: form.title
    };
    this.notesService.addNote(newNote).subscribe((note: INote) => {
      // always returns this valu from mock 'Buy cheese and bread for breakfast.'
      this.titleFormControl.setValue('');
      this.notesService.notes.push(note);
      this.busy.hide();
    });
  }


}

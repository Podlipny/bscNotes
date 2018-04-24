import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../core/resource.service';
import { NotesService } from '../core/notes.service';
import { INote } from '../core/INote';
import { BusyService } from '../core/busy.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(public resources: ResourceService,
              public notesService: NotesService,
              private busy: BusyService) {
  }

  ngOnInit() {
    // this will load only on start, because mock API return only 2 items
    if (this.notesService.notes.length === 0) {
      this.notesService.loadAll();
    }
  }

  changeLanguage(language: string) {
    this.resources.loadLanguageResource(language);
  }

  delete(note: INote) {
    this.busy.show();
    if (this.notesService.noteExist(note)) {
      this.notesService.deleteNote(note).subscribe(() => {
        const index = this.notesService.notes.indexOf(note, 0);
        if (index > -1) {
          this.notesService.notes.splice(index, 1);
        }
        this.busy.hide();
      }, err => console.log(err));
    }
  }
}

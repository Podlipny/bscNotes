import { Component, OnInit } from '@angular/core';
import { ResourceService } from '../core/resource.service';
import { NotesService } from '../core/notes.service';
import { INote } from '../core/INote';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(public resources: ResourceService, public notesService: NotesService) {
  }

  ngOnInit() {
    this.notesService.loadAll();
  }

  addNote(title: string) {
    const newNote: INote = {
      id: this.notesService.getMaxId(),
      title: title
    };
    this.notesService.addNote(newNote);
  }

  changeLanguage(language: string) {
    this.resources.loadLanguageResource(language);
  }
}

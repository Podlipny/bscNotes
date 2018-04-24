import { Injectable } from '@angular/core';
import { INote } from './INote';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { BusyService } from './busy.service';

import { map } from 'rxjs/operators';

@Injectable()
export class NotesService {

  endpoint: string = 'notes';
  notes: INote[] = [];

  headers: HttpHeaders;
  // We will load data from mockup API and then save then to local list
  constructor(private http: HttpClient, private busy: BusyService) {
    const header = {
      'Content-Type': 'application/json; charset=utf-8;',
      'Accept': 'application/json'
    };

    this.headers = new HttpHeaders(header);
  }

  loadAll() {
    this.busy.show();
    return this.http.get<INote[]>(environment.apiUrl + this.endpoint).subscribe((data: INote[]) => {
      // we are loading data from mock, so if we will delete record with Id 1 or 2 it will get loaded again
      this.notes = data;
      this.busy.hide();
    }, err => console.log(err));
  }

  addNote(note: INote): Observable<INote> {
    return this.http.post<INote>(environment.apiUrl + this.endpoint, note, { headers: this.headers });
  }

  editNote(note: INote): Observable<INote> {
    return this.http.put<INote>(environment.apiUrl + this.endpoint + '/' + note.id, note, { headers: this.headers });
  }

  getNote(id: number): Observable<INote> {
    // for some reason mock API still returns ID 2 - but it's enough for example
    return this.http.get<INote>(environment.apiUrl + this.endpoint + '/' + id, { headers: this.headers });
  }

  deleteNote(note: INote): Observable<INote> {
    return this.http.delete<INote>(environment.apiUrl + this.endpoint + '/' + note.id, { headers: this.headers });
  }

  getMaxId(): number {
    return Math.max.apply(this.notes.map(function(note) { return note.id; }));
  }

  noteExist(note): boolean {
    // this should be on API - only verify, that note is in array of notes
    return this.notes.indexOf(note) > -1;
  }
}

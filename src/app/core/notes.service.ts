import { Injectable } from '@angular/core';
import { INote } from './INote';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()
export class NotesService {

  endpoint: string = 'notes';
  notes: INote[] = [];

  headers: HttpHeaders;
  // We will load data from mockup API and then save then to local list
  constructor(private http: HttpClient) {
    const header = {
      'Content-Type': 'application/json; charset=utf-8;',
      'Accept': 'application/json'
    };

    this.headers = new HttpHeaders(header);
  }

  loadAll() {
    this.http.get<INote[]>(environment.apiUrl + this.endpoint)
             .subscribe((data: INote[]) => {
              // we are loading data from mock, so if we will delete record with Id 1 or 2 it will get loaded again
              this.notes = data;
              console.log(data);
             }, err => console.log(err));
  }

  addNote(note: INote) {
    this.notes.push(note);
    this.http.post<INote>(environment.apiUrl + this.endpoint + '/', note, { headers: this.headers })
             .subscribe(() => {
             }, err => {
               console.log('Error occured please try it again!');
               console.log(err);
            });
  }

  getMaxId(): number {
    return Math.max.apply(this.notes.map(function(note) { return note.id; }));
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IResource } from './IResource';

@Injectable()
export class ResourceService {

  language: string = 'cz';
  dict: IResource;

  constructor(private http: HttpClient) { }

  loadLanguageResource(language: string) {
    this.http.get<IResource>('../resources/' + language + '.json').subscribe((data: IResource) => {
      this.language = language;
      this.dict = data;
    }, err => console.log(err));
  }
}


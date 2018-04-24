import { Component } from '@angular/core';
import { ResourceService } from './core/resource.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public resources: ResourceService) {
    if (this.resources.dict == null) {
      this.resources.loadLanguageResource('cz');
    }
  }

  changeLanguage(language: string) {
    this.resources.loadLanguageResource(language);
  }
}

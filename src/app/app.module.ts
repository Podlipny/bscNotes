import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NotesComponent } from './notes/notes.component';
import { InlineaddComponent } from './inlineadd/inlineadd.component';

const routes: Routes = [
  { path: '', component: NotesComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    InlineaddComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

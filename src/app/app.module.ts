import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NotesComponent } from './notes/notes.component';
import { InlineaddComponent } from './inlineadd/inlineadd.component';
import { DetailComponent } from './detail/detail.component';

const routes: Routes = [
  { path: '', component: NotesComponent },
  { path: ':operation/:id', component: DetailComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    InlineaddComponent,
    DetailComponent
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

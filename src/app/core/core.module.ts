import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BusyComponent } from './busy/busy.component';

import { NotesService } from './notes.service';
import { BusyService } from './busy.service';
import { ResourceService } from './resource.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BusyComponent
  ],
  declarations: [ BusyComponent ],
  providers: [ NotesService, BusyService, ResourceService ]
})
export class CoreModule {
  // ensure CoreModule will be singletone and will not be reimported
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}

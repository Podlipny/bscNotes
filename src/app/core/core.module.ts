import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NotesService } from './notes.service';
import { BusyComponent } from './busy/busy.component';
import { BusyService } from './busy.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    BusyComponent
  ],
  declarations: [ BusyComponent ],
  providers: [ NotesService, BusyService ]
})
export class CoreModule {
  // ensure CoreModule will be singletone and will not be reimported
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`CoreModule has already been loaded. Import Core modules in the AppModule only.`);
    }
  }
}

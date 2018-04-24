import { Injectable, Optional, SkipSelf } from '@angular/core';
import { Subject } from 'rxjs/Subject';

export interface BusyState {
  show: boolean;
}

@Injectable()
export class BusyService {
  private busySubject = new Subject<BusyState>();

  busyState = this.busySubject.asObservable();

  constructor(@Optional() @SkipSelf() prior: BusyService) {
    if (prior) {
      console.log('busy service already exists');
      return prior;
    } else {
      console.log('created busy service');
    }
  }

  show() {
    // next will set new value to Subject observable object
    this.busySubject.next(<BusyState>{ show: true });
  }

  hide() {
    this.busySubject.next(<BusyState>{ show: false });
  }
}

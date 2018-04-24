import { Component, OnInit, OnDestroy } from '@angular/core';
import { BusyService, BusyState } from '../busy.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-busy',
  templateUrl: './busy.component.html',
  styleUrls: ['./busy.component.scss']
})
export class BusyComponent implements OnInit, OnDestroy {
  visible = false;

  private busyStateChanged: Subscription;

  constructor(private busyService: BusyService) { }

  ngOnInit() {
    this.busyStateChanged = this.busyService.busyState
        .subscribe((state: BusyState) => this.visible = state.show);
  }

  ngOnDestroy() {
    this.busyStateChanged.unsubscribe();
  }
}

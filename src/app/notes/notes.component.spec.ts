import { async, ComponentFixture, TestBed, tick, fakeAsync } from '@angular/core/testing';

import { NotesComponent } from './notes.component';
import { InlineaddComponent } from '../inlineadd/inlineadd.component';
import { CoreModule } from '../core/core.module';

describe('NotesComponent', () => {
  let component: NotesComponent;
  let fixture: ComponentFixture<NotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
      declarations: [ NotesComponent, InlineaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

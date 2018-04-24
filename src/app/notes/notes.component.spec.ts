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

  it('should render title in a h1 tag', async(() => {
    fixture = TestBed.createComponent(NotesComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1')).toBeTruthy();
  }));

  it('should click on EN and change language', async(() => {
    fixture = TestBed.createComponent(NotesComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    // najdeme En button a overime ze obsahuje En label
    const button = compiled.querySelector('div > div.row.vertical-center > div.col > button:nth-child(2)');
    expect(button.textContent).toContain('EN');
    button.click();

    expect(compiled.querySelector('button')).toBeTruthy();
  }));
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineaddComponent } from './inlineadd.component';
import { FormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';

describe('InlineaddComponent', () => {
  let component: InlineaddComponent;
  let fixture: ComponentFixture<InlineaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreModule],
      declarations: [ InlineaddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InlineaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

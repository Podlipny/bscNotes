import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InlineaddComponent } from './inlineadd.component';

describe('InlineaddComponent', () => {
  let component: InlineaddComponent;
  let fixture: ComponentFixture<InlineaddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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

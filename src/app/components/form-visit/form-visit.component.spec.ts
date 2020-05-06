import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormVisitComponent } from './form-visit.component';

describe('FormVisitComponent', () => {
  let component: FormVisitComponent;
  let fixture: ComponentFixture<FormVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormUserPreferenceComponent } from './form-user-preference.component';

describe('FormUserPreferenceComponent', () => {
  let component: FormUserPreferenceComponent;
  let fixture: ComponentFixture<FormUserPreferenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormUserPreferenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormUserPreferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

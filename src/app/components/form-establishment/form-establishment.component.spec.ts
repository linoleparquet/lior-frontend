import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEstablishmentComponent } from './form-establishment.component';

describe('FormEstablishmentComponent', () => {
  let component: FormEstablishmentComponent;
  let fixture: ComponentFixture<FormEstablishmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEstablishmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEstablishmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

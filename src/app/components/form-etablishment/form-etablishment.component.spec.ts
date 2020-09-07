import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEtablishmentComponent } from './form-etablishment.component';

describe('FormEtablishmentComponent', () => {
  let component: FormEtablishmentComponent;
  let fixture: ComponentFixture<FormEtablishmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEtablishmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEtablishmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

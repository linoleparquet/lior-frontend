import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVisitPerDoctorComponent } from './table-visit-per-doctor.component';

describe('TableVisitPerDoctorComponent', () => {
  let component: TableVisitPerDoctorComponent;
  let fixture: ComponentFixture<TableVisitPerDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableVisitPerDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableVisitPerDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDoctorComponent } from './table-doctor.component';

describe('TableDoctorComponent', () => {
  let component: TableDoctorComponent;
  let fixture: ComponentFixture<TableDoctorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableDoctorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

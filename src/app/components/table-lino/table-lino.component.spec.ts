import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableLinoComponent } from './table-lino.component';

describe('TableLinoComponent', () => {
  let component: TableLinoComponent;
  let fixture: ComponentFixture<TableLinoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableLinoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableLinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

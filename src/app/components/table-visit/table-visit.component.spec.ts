import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVisitComponent } from './table-visit.component';

describe('TableVisitComponent', () => {
  let component: TableVisitComponent;
  let fixture: ComponentFixture<TableVisitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableVisitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

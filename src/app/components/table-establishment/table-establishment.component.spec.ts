import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableEstablishmentComponent } from './table-establishment.component';

describe('TableEstablishmentComponent', () => {
  let component: TableEstablishmentComponent;
  let fixture: ComponentFixture<TableEstablishmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableEstablishmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableEstablishmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

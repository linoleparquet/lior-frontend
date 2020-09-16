import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditEstablishmentComponent } from './edit-establishment.component';

describe('EditEstablishmentComponent', () => {
  let component: EditEstablishmentComponent;
  let fixture: ComponentFixture<EditEstablishmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditEstablishmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditEstablishmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstablishmentComponent } from './establishment.component';

describe('EstablishmentComponent', () => {
  let component: EstablishmentComponent;
  let fixture: ComponentFixture<EstablishmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstablishmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstablishmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

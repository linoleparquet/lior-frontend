import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEstablishmentComponent } from './new-establishment.component';

describe('NewEstablishmentComponent', () => {
  let component: NewEstablishmentComponent;
  let fixture: ComponentFixture<NewEstablishmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEstablishmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEstablishmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

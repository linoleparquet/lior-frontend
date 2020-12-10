import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindRouteComponent } from './find-route.component';

describe('FindRouteComponent', () => {
  let component: FindRouteComponent;
  let fixture: ComponentFixture<FindRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationArrowsComponent } from './navigation-arrows.component';

describe('NavigationArrowsComponent', () => {
  let component: NavigationArrowsComponent;
  let fixture: ComponentFixture<NavigationArrowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationArrowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationArrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

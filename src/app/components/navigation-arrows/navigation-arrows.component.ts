import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navigation-arrows',
  templateUrl: './navigation-arrows.component.html',
  styleUrls: ['./navigation-arrows.component.css']
})
export class NavigationArrowsComponent implements OnInit {

  constructor(
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  onLeft() {
    this.location.back()
  }

  onRight() {
    this.location.forward()
  }
}

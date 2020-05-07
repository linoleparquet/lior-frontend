import { Component, OnInit } from '@angular/core';
import { Visit } from 'models/visit.model';

@Component({
  selector: 'app-new-visit',
  templateUrl: './new-visit.component.html',
  styleUrls: ['./new-visit.component.css']
})
export class NewVisitComponent implements OnInit {

  visit: Visit;

  constructor() { }

  ngOnInit(): void {
    this.visit = new Visit();
  }

}

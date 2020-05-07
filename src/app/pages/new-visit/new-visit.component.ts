import { Component, OnInit } from '@angular/core';
import { Visit } from 'models/visit.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-new-visit',
  templateUrl: './new-visit.component.html',
  styleUrls: ['./new-visit.component.css']
})
export class NewVisitComponent implements OnInit {

  visit: Visit;
  title: String;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.visit = new Visit();
    this.title = "New Visit";
    this.route.queryParams.subscribe(params => {
      this.visit.doctorId = params['doctor']
    })
  }

}

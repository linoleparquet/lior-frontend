import { Component, OnInit } from '@angular/core';
import { Visit } from 'models/visit.model';
import { ActivatedRoute } from '@angular/router';
import { VisitService } from 'app/services/visit.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-new-visit',
  templateUrl: './new-visit.component.html',
  styleUrls: ['./new-visit.component.css']
})
export class NewVisitComponent implements OnInit {

  visit: Visit;

  constructor(
    private route: ActivatedRoute,
    private visitService: VisitService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.visit = new Visit();
    this.route.queryParams.subscribe(params => {
      this.visit.doctorId = Number(params['doctor']) || undefined
    })
  }

  create(visit: Visit) {
    this.visitService.postCreateNewVisit(visit).subscribe(() => this.location.back());
  }

}

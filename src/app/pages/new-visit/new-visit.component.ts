import { Component, OnInit } from '@angular/core';
import { Visit } from 'models/visit.model';
import { ActivatedRoute } from '@angular/router';
import { VisitService } from 'app/services/visit.service';

@Component({
  selector: 'app-new-visit',
  templateUrl: './new-visit.component.html',
  styleUrls: ['./new-visit.component.css']
})
export class NewVisitComponent implements OnInit {

  visit: Visit;
  title: String;
  button: string;

  constructor(private route: ActivatedRoute,
    private visitService: VisitService) { }

  ngOnInit(): void {
    this.visit = new Visit();
    this.title = "New Visit";
    this.button = "Confirm";
    this.route.queryParams.subscribe(params => {
      this.visit.doctorId = params['doctor']
    })
  }

  create() {
    this.visitService.postCreateNewVisit(this.visit);
    console.log("create");
  }

}

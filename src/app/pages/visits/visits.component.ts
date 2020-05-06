import { Component, OnInit } from '@angular/core';
import { VisitService } from 'app/services/visit.service';
import { Observable } from 'rxjs';
import { Visit } from 'models/visit.model';
import { VISITS_TABLE_HEADER } from 'app/mock/database.mock';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visits',
  templateUrl: './visits.component.html',
  styleUrls: ['./visits.component.css']
})
export class VisitsComponent implements OnInit {

  visits$: Observable<Visit[]>;
  headElements: String[];


  constructor(private visitService: VisitService,
    public router: Router) { }

  ngOnInit(): void {
    this.visits$ = this.visitService.getAllVisits();
    this.headElements = VISITS_TABLE_HEADER;
  }

  openEditVisitPage(id: number) {
    this.router.navigate([`/visit/${id}/edit`]);
  }

}

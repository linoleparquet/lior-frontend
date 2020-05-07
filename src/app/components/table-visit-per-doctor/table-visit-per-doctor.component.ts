import { Component, OnInit, Input } from '@angular/core';
import { Visit } from 'models/visit.model';
import { Router } from '@angular/router';
import { VISIT_PER_DOCTOR_TABLE_HEADER } from 'app/mock/database.mock';

@Component({
  selector: 'app-table-visit-per-doctor',
  templateUrl: './table-visit-per-doctor.component.html',
  styleUrls: ['./table-visit-per-doctor.component.css']
})
export class TableVisitPerDoctorComponent implements OnInit {

  @Input() visits: Visit[];
  headElements: String[];

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
    this.headElements = VISIT_PER_DOCTOR_TABLE_HEADER;
  }

  openEditVisitPage(id: number) {
    this.router.navigate([`/visit/${id}/edit`]);
  }

}

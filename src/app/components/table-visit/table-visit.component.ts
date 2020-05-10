import { Component, OnInit, Input } from '@angular/core';
import { Visit } from 'models/visit.model';
import { Router } from '@angular/router';
import { VISITS_TABLE_HEADER } from 'app/mock/database.mock';

@Component({
  selector: 'app-table-visit',
  templateUrl: './table-visit.component.html',
  styleUrls: ['./table-visit.component.css']
})
export class TableVisitComponent implements OnInit {

  @Input() visits: Visit[];
  @Input() title: String;
  headElements: String[];

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.headElements = VISITS_TABLE_HEADER;
  }

  openEditVisitPage(id: number) {
    this.router.navigate([`/visit/${id}/edit`]);
  }

}

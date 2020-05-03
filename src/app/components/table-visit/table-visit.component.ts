import { Component, OnInit, Input } from '@angular/core';
import { VISIT_TABLE_HEADER } from 'app/mock/database.mock';
import { Visit } from 'models/visit.model';

@Component({
  selector: 'app-table-visit',
  templateUrl: './table-visit.component.html',
  styleUrls: ['./table-visit.component.css']
})
export class TableVisitComponent implements OnInit {

  @Input() visits: Visit[];
  headElements: String[];

  constructor() { }

  ngOnInit(): void {
    this.headElements = VISIT_TABLE_HEADER;
  }


}

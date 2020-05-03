import { Component, OnInit, Input } from '@angular/core';
import { DOCTOR_TABLE_HEADER } from 'app/mock/database.mock';
import { Doctor } from 'models/doctor.model';

@Component({
  selector: 'app-table-doctor',
  templateUrl: './table-doctor.component.html',
  styleUrls: ['./table-doctor.component.css']
})
export class TableDoctorComponent implements OnInit {
  @Input() title: String;
  @Input() doctors: Doctor[];
  @Input() isAddDoctorButton: boolean;
  headElements: String[];

  constructor() { }

  ngOnInit(): void {
    this.headElements = DOCTOR_TABLE_HEADER;;
  }

  getLastVisit(nextVisit: string, periodicity: number) {
    const date = new Date(nextVisit);
    return date.setMonth(date.getMonth() - periodicity);
  }

}

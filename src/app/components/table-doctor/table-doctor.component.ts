import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from 'models/doctor.model';
import { DOCTORS, DOCTOR_TABLE_HEADER } from 'app/mock/database.mock';

@Component({
  selector: 'app-table-doctor',
  templateUrl: './table-doctor.component.html',
  styleUrls: ['./table-doctor.component.css']
})
export class TableDoctorComponent implements OnInit {

  @Input() doctors: Doctor[];
  @Input() title: String;
  @Input() isAddDoctor: boolean;
  headElements: String[];

  constructor() { }

  ngOnInit(): void {
    this.headElements = DOCTOR_TABLE_HEADER;
  }

}
import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from 'models/doctor.model';
import { Visit } from 'models/visit.model';
import { DOCTORS } from 'app/mock/database.mock';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  @Input() doctor: Doctor;
  @Input() visits: Visit[];

  constructor() { }

  ngOnInit(): void {
    this.doctor = DOCTORS[0];
  }

}

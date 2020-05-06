import { Component, OnInit } from '@angular/core';
import { Doctor } from 'models/doctor.model';

@Component({
  selector: 'app-new-doctor',
  templateUrl: './new-doctor.component.html',
  styleUrls: ['./new-doctor.component.css']
})
export class NewDoctorComponent implements OnInit {

  doctor: Doctor;

  constructor() { }

  ngOnInit(): void {
    this.doctor = new Doctor();
  }

}

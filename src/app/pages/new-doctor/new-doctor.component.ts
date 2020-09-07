import { Component, OnInit } from '@angular/core';
import { Doctor } from 'models/doctor.model';
import { Location } from '@angular/common';
import { DoctorService } from 'app/services/doctor.service';

@Component({
  selector: 'app-new-doctor',
  templateUrl: './new-doctor.component.html',
  styleUrls: ['./new-doctor.component.css']
})
export class NewDoctorComponent implements OnInit {

  doctor: Doctor;

  constructor(
    private doctorService: DoctorService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.doctor = new Doctor();
  }

  create(doctor: Doctor) {
    this.doctorService.postCreateNewDoctor(doctor).subscribe(() => this.location.back());
  }
}

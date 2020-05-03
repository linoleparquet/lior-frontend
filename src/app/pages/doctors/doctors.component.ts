import { Component, OnInit } from '@angular/core';
import { Doctor } from 'models/doctor.model';
import { DoctorService } from 'app/services/doctor.service';
import { DOCTOR_TABLE_HEADER } from 'app/mock/database.mock';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  doctors: Doctor[];
  headElements: String[];

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.doctorService.getAllDoctors().subscribe(doctors => this.doctors = doctors);
    this.headElements = DOCTOR_TABLE_HEADER;
  }

}

import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'app/services/doctor.service';
import { Doctor } from 'models/doctor.model';
import { DOCTORS, DOCTOR_TABLE_HEADER } from 'app/mock/database.mock';


@Component({
  selector: 'dashboard-cmp',
  moduleId: module.id,
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {

  doctors: Doctor[];
  doctorsActualMonth: Doctor[];
  doctorsBeforeActualMonth: Doctor[];
  doctorsProspect: Doctor[];

  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
    this.doctors = DOCTORS;
    this.doctorsActualMonth = this.doctorService.getDoctorsActualMonth();
    this.doctorsBeforeActualMonth = this.doctorService.getDoctorsBeforeActualMonth();
    this.doctorsProspect = this.doctorService.getDoctorsProspect();

  }
}

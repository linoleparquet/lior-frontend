import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'app/services/doctor.service';
import { Doctor } from 'models/doctor.model';


@Component({
  selector: 'dashboard-cmp',
  moduleId: module.id,
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {

  doctorsVisitPlannedForActualMonth: Doctor[];
  doctorsVisitPlannedBeforeActualMonth: Doctor[];
  doctorsProspect: Doctor[];
  noDoctorToDisplay: boolean;

  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
    this.doctorService.getDoctorsVisitPlannedForActualMonth().subscribe(data => this.doctorsVisitPlannedForActualMonth = data)
    this.doctorService.getDoctorsVisitPlannedBeforeActualMonth().subscribe(data => this.doctorsVisitPlannedBeforeActualMonth = data)
    this.doctorService.getDoctorsProspect().subscribe(data => this.doctorsProspect = data)

    //this.noDoctorToDisplay = this.doctorsVisitPlannedForActualMonth.length + this.doctorsVisitPlannedBeforeActualMonth.length + this.doctorsProspect.length == 0;
  }
}

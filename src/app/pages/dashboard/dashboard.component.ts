import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'app/services/doctor.service';
import { Doctor } from 'models/doctor.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'dashboard-cmp',
  moduleId: module.id,
  templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {

  doctorsVisitPlannedForActualMonth: Doctor[];
  doctorsVisitPlannedBeforeActualMonth: Doctor[];
  doctorsProspect: Doctor[];

  data;

  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
    this.doctorService.getDoctorsVisitPlannedForActualMonth().toPromise().then(data => this.doctorsVisitPlannedForActualMonth = data)
    this.doctorService.getDoctorsVisitPlannedBeforeActualMonth().toPromise().then(data => this.doctorsVisitPlannedBeforeActualMonth = data)
    this.doctorService.getDoctorsProspect().toPromise().then(data => this.doctorsProspect = data)
  }
}

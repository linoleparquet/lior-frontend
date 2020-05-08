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

  doctorsActualMonth$: Observable<Doctor[]>;
  doctorsBeforeActualMonth$: Observable<Doctor[]>;
  doctorsProspect$: Observable<Doctor[]>;

  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
    this.doctorsActualMonth$ = this.doctorService.getDoctorsActualMonth();
    this.doctorsBeforeActualMonth$ = this.doctorService.getDoctorsBeforeActualMonth();
    this.doctorsProspect$ = this.doctorService.getDoctorsProspect();
  }
}

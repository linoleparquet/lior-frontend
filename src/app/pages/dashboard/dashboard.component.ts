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
  doctors: Doctor[]
  noDoctors: boolean;
  isSpinner = true;

  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
    this.doctorService.getAllDoctors().subscribe(data => {
      this.isSpinner = false;
      this.doctors = data
      this.setDoctorsVisitPlannedBeforeActualMonth();
      this.setDoctorsVisitPlannedForActualMonth();
      this.setDoctorsProspect();
      this.noDoctors = !this.doctorsVisitPlannedForActualMonth.length && !this.doctorsVisitPlannedBeforeActualMonth.length && !this.doctorsProspect.length
    });
  }


  setDoctorsVisitPlannedForActualMonth(): void {
    const now = new Date(Date.now());
    now.setHours(0, 0, 0, 0);
    now.setDate(1)

    this.doctorsVisitPlannedForActualMonth = this.doctors.filter(doctor => {
      const visit = new Date(doctor.nextVisit);
      visit.setHours(0, 0, 0, 0)
      visit.setDate(1)
      if (doctor.nextVisit != null && now.getTime() == visit.getTime()) { return true }
    });

  }
  setDoctorsVisitPlannedBeforeActualMonth(): void {
    const now = new Date(Date.now());
    now.setHours(0, 0, 0, 0);
    now.setDate(1)

    this.doctorsVisitPlannedBeforeActualMonth = this.doctors.filter(doctor => {
      const visit = new Date(doctor.nextVisit);
      visit.setHours(0, 0, 0, 0)
      visit.setDate(1)
      if (doctor.nextVisit != null && visit.getTime() < now.getTime()) { return true }
    });
  }

  setDoctorsProspect(): void {
    this.doctorsProspect = this.doctors.filter(doctor => {
      if (doctor.lastVisit == null) { return true }
    });
  }
}

import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Doctor } from 'models/doctor.model';
import { Router } from '@angular/router';
import { VisitService } from 'app/services/visit.service';

@Component({
  selector: 'app-table-doctor',
  templateUrl: './table-doctor.component.html',
  styleUrls: ['./table-doctor.component.css']
})
export class TableDoctorComponent implements OnInit {
  @Input() title: String;
  @Input() doctors: Doctor[];
  @Input() isAddDoctorButton: boolean;

  constructor(private router: Router,
    private visitService: VisitService) { }

  ngOnInit(): void {
    this.getLastVisitDate()
  }

  getLastVisitDate() {
    this.doctors.forEach(doctor => {
      if (doctor.lastVisitId != undefined) {
        this.visitService.getOneVisit(doctor.lastVisitId).subscribe(visit => doctor.lastVisitDate = visit.date)
      } else {
        doctor.lastVisitDate = null;
      }
    })
  }

  OpenDoctorPage(id: number) {
    this.router.navigate([`/doctor/${id}`]);
  }

}

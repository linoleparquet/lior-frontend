import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Doctor } from 'models/doctor.model';
import { Router } from '@angular/router';
import { Table } from 'primeng/table';

@Component({
  selector: 'app-table-doctor',
  templateUrl: './table-doctor.component.html',
  styleUrls: ['./table-doctor.component.css']
})
export class TableDoctorComponent implements OnInit {
  @Input() title: String;
  @Input() doctors: Doctor[];
  @Input() isAddDoctorButton: boolean;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  getLastVisit(doctor: Doctor) {
    // appeler le service et recup le last visit date grace au last date id 
    if (doctor.nextVisitDate != null) {
      const date = new Date(doctor.nextVisitDate);
      const periodicity = doctor.periodicity;
      return date.setMonth(date.getMonth() - periodicity);
    }

    return null;
  }

  OpenDoctorPage(id: number) {
    this.router.navigate([`/doctor/${id}`]);
  }

}

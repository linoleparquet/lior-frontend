import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from 'models/doctor.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-doctor',
  templateUrl: './table-doctor.component.html',
  styleUrls: ['./table-doctor.component.css']
})
export class TableDoctorComponent implements OnInit {
  @Input() title: String;
  @Input() doctors: Doctor[];
  @Input() isAddDoctorButton: boolean;
  headElements: String[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getLastVisit(doctor: Doctor) {
    const date = new Date(doctor.nextVisitDate);
    const periodicity = doctor.periodicity;
    return date.setMonth(date.getMonth() - periodicity);
  }

  OpenDoctorPage(id: number) {
    this.router.navigate([`/doctor/${id}`]);
  }

}

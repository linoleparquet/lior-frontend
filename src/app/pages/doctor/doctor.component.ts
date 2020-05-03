import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from 'models/doctor.model';
import { Visit } from 'models/visit.model';
import { DOCTORS, VISITS } from 'app/mock/database.mock';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { DoctorService } from 'app/services/doctor.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  visits: Visit[];

  doctor: Doctor;

  constructor(
    private doctorService: DoctorService,
    private route: ActivatedRoute,
    public router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.doctorService.getOneDoctor(id).subscribe(d => this.doctor = d)
    this.visits = VISITS;
  }

  onClick() {
    this.router.navigate([`/doctor/${this.doctor.id}/edit`]);
  }

}

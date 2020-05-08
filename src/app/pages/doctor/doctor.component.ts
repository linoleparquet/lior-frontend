import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from 'models/doctor.model';
import { Visit } from 'models/visit.model';
import { DOCTORS, VISITS, VISIT_PER_DOCTOR_TABLE_HEADER } from 'app/mock/database.mock';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { DoctorService } from 'app/services/doctor.service';
import { Observable, of } from 'rxjs';
import { VisitService } from 'app/services/visit.service';

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  visits$: Observable<Visit[]>;
  doctor$: Observable<Doctor>;
  id: number;

  constructor(
    private doctorService: DoctorService,
    private visitService: VisitService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.doctor$ = this.doctorService.getOneDoctor(this.id);
    this.visits$ = this.visitService.getVisitsByDoctor(this.id);
  }


}

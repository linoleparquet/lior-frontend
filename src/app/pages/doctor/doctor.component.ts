import { Component, OnInit } from '@angular/core';
import { Doctor } from 'models/doctor.model';
import { Visit } from 'models/visit.model';
import { ActivatedRoute } from '@angular/router';
import { DoctorService } from 'app/services/doctor.service';
import { Observable } from 'rxjs';
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
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.doctor$ = this.doctorService.getOneDoctor(this.id);
    this.visits$ = this.visitService.getVisitsByDoctor(this.id);
  }


  getPeriodicityText(periodicity: number): string {
    switch (periodicity) {
      case 1:
        return "Every months"
      case 6:
        return "Twice a year" 
      case 12:
        return "Once a year"
      default:
        return "Every " + periodicity + " months"
    }
  }

}

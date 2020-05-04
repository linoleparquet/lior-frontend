import { Component, OnInit } from '@angular/core';
import { VisitService } from 'app/services/visit.service';
import { ActivatedRoute } from '@angular/router';
import { Visit } from 'models/visit.model';
import { DoctorService } from 'app/services/doctor.service';
import { Observable } from 'rxjs';
import { Doctor } from 'models/doctor.model';

@Component({
  selector: 'app-edit-visit',
  templateUrl: './edit-visit.component.html',
  styleUrls: ['./edit-visit.component.css']
})
export class EditVisitComponent implements OnInit {

  visit: Visit;
  doctors$: Observable<Doctor[]>

  constructor(
    private visitService: VisitService,
    private route: ActivatedRoute,
    private doctorService: DoctorService
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.visitService.getOneVisit(id).subscribe(v => this.visit = v);
    this.doctors$ = this.doctorService.getAllDoctors();
  }
}

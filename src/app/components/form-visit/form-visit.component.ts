import { Component, OnInit, Input } from '@angular/core';
import { Visit } from 'models/visit.model';
import { Observable } from 'rxjs';
import { Doctor } from 'models/doctor.model';
import { DoctorService } from 'app/services/doctor.service';

@Component({
  selector: 'app-form-visit',
  templateUrl: './form-visit.component.html',
  styleUrls: ['./form-visit.component.css']
})
export class FormVisitComponent implements OnInit {

  @Input() visit: Visit;
  doctors$: Observable<Doctor[]>;

  constructor(
    private doctorService: DoctorService
  ) { }

  ngOnInit(): void {
    this.doctors$ = this.doctorService.getAllDoctors();
  }

}

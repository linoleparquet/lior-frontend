import { Component, OnInit } from '@angular/core';
import { Doctor } from 'models/doctor.model';
import { DoctorService } from 'app/services/doctor.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  doctors$: Observable<Doctor[]>;
  headElements: String[];

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.doctors$ = this.doctorService.getAllDoctors()
  }

}

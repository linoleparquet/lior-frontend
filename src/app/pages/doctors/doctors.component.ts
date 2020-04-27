import { Component, OnInit } from '@angular/core';
import { Doctor } from 'models/doctor.model';
import { DoctorService } from 'app/services/doctor.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  doctors: Doctor[];

  constructor(private doctorService: DoctorService) { }

  ngOnInit(): void {
    this.doctorService.getAllDoctors().subscribe(doctors => this.doctors = doctors);
  }

}

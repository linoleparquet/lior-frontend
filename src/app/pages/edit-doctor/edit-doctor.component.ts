import { Component, OnInit } from '@angular/core';
import { Doctor } from 'models/doctor.model';
import { DoctorService } from 'app/services/doctor.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit {

  doctor$: Observable<Doctor>;
  title: String;
  button: String;


  constructor(
    private doctorService: DoctorService,
    private route: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.doctor$ = this.doctorService.getOneDoctor(id);
    this.title = 'Edit Profile';
    this.button = 'Update';
  }

  update(doctor: Doctor) {
    this.doctorService.putUpdateOneDoctor(doctor);
    console.log('update');
    this.location.back();
  }

  delete(id: number) {
    this.doctorService.deleteOneDoctor(id);
    console.log('delete');
    this.location.back();
  }
}

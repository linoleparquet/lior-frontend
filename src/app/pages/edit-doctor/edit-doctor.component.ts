import { Component, OnInit } from '@angular/core';
import { Doctor } from 'models/doctor.model';
import { DoctorService } from 'app/services/doctor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-doctor',
  templateUrl: './edit-doctor.component.html',
  styleUrls: ['./edit-doctor.component.css']
})
export class EditDoctorComponent implements OnInit {

  doctor: Doctor;
  title: String;
  button: String;
  displayModal: boolean;


  constructor(
    private doctorService: DoctorService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.doctorService.getOneDoctor(id).toPromise().then(data => this.doctor = data);
    this.title = 'Edit Profile';
    this.button = 'Update';
  }

  update(doctor: Doctor) {
    this.doctorService.putUpdateOneDoctor(doctor).subscribe(() => this.location.back())

  }

  delete(id: number) {
    this.doctorService.deleteOneDoctor(id).subscribe(() => {
      this.router.navigate(['/doctors']);
      this.toggleModal();
    })
  }

  toggleModal() {
    this.displayModal = !this.displayModal;
  }
}

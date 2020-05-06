import { Component, OnInit, Input } from '@angular/core';
import { Doctor } from 'models/doctor.model';

@Component({
  selector: 'app-form-doctor',
  templateUrl: './form-doctor.component.html',
  styleUrls: ['./form-doctor.component.css']
})
export class FormDoctorComponent implements OnInit {

  @Input() doctor: Doctor;

  constructor() { }

  ngOnInit(): void {
  }

}

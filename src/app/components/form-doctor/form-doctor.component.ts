import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Doctor } from 'models/doctor.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-doctor',
  templateUrl: './form-doctor.component.html',
  styleUrls: ['./form-doctor.component.css']
})
export class FormDoctorComponent implements OnInit {

  @Input() doctor: Doctor;
  @Input() isEdit: boolean;
  @Input() title: String;
  @Input() button: String;
  @Output() confirmation: EventEmitter<MouseEvent>;
  @Output() delete: EventEmitter<MouseEvent>;

  doctorForm: FormGroup;


  constructor() {
    this.confirmation = new EventEmitter();
    this.delete = new EventEmitter();
  }

  ngOnInit(): void {
    this.doctorForm = new FormGroup({
      'name': new FormControl(this.doctor.name, [
        Validators.required
      ]),
      'surname': new FormControl(this.doctor.surname, [
        Validators.required
      ]),
      'department': new FormControl(this.doctor.department, [
        Validators.required
      ]),
      'city': new FormControl(this.doctor.city, [
        Validators.required
      ]),
      'periodicity': new FormControl(this.doctor.periodicity, [
        Validators.required
      ])
    });
  }

  onConfirmation(): void {
    this.confirmation.emit();
  }

  onDelete(): void {
    this.delete.emit();
  }

  get name() { return this.doctorForm.get('name'); }
  get surname() { return this.doctorForm.get('surname'); }
  get department() { return this.doctorForm.get('department'); }
  get city() { return this.doctorForm.get('city'); }
  get periodicity() { return this.doctorForm.get('periodicity'); }
}

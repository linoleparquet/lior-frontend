import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Doctor } from 'models/doctor.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DEPARTMENT } from 'assets/json/departments';

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
  @Output() confirmation: EventEmitter<Doctor>;
  @Output() delete: EventEmitter<MouseEvent>;

  form: FormGroup;
  departmentSuggestion: any[];


  constructor() {
    this.confirmation = new EventEmitter<Doctor>();
    this.delete = new EventEmitter<MouseEvent>();
  }

  ngOnInit(): void {
    this.departmentSuggestion = DEPARTMENT;
    this.form = new FormGroup({
      'id': new FormControl(this.doctor.id, []),
      'lastVisitId': new FormControl(this.doctor.lastVisitId, []),
      'nextVisitDate': new FormControl(this.doctor.nextVisitDate, []),
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
    this.confirmation.emit(this.form.value);
  }

  onDelete(): void {
    this.delete.emit();
  }

  get name() { return this.form.get('name'); }
  get surname() { return this.form.get('surname'); }
  get department() { return this.form.get('department'); }
  get city() { return this.form.get('city'); }
  get periodicity() { return this.form.get('periodicity'); }
}

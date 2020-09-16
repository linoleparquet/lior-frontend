import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Doctor } from 'models/doctor.model';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DEPARTMENT } from 'assets/json/departments';
import { EstablishmentService } from 'app/services/establishment.service';
import { Establishment } from 'models/establishment.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-form-doctor',
  templateUrl: './form-doctor.component.html',
  styleUrls: ['./form-doctor.component.css']
})
export class FormDoctorComponent implements OnInit {

  @Input() doctor: Doctor;
  @Input() isEdit: boolean;
  @Output() confirmation: EventEmitter<Doctor>;
  @Output() delete: EventEmitter<MouseEvent>;

  form: FormGroup;
  departmentSuggestion: any[];
  establishments$: Observable<Establishment[]>;


  constructor(
    private fb: FormBuilder,
    private establishmentService: EstablishmentService
  ) {
    this.confirmation = new EventEmitter<Doctor>();
    this.delete = new EventEmitter<MouseEvent>();

  }

  ngOnInit(): void {
    this.departmentSuggestion = DEPARTMENT;
    this.form = this.fb.group({
      id: [this.doctor.id],
      establishmentId: [this.doctor.establishmentId, Validators.required],
      name: [this.doctor.name, Validators.required],
      surname: [this.doctor.surname, Validators.required],
      periodicity: [this.doctor.periodicity, Validators.required]
    })

    this.establishments$ = this.establishmentService.getAllEstablishments();
  }

  onConfirmation(): void {
    this.confirmation.emit(this.form.value);
  }

  onDelete(): void {
    this.delete.emit();
  }

  get establishmentId() { return this.form.get('establishmentId') }
  get name() { return this.form.get('name') }
  get surname() { return this.form.get('surname') }
  get periodicity() { return this.form.get('periodicity') }
}

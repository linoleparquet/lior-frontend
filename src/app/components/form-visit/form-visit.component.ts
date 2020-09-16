import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Visit } from 'models/visit.model';
import { Observable } from 'rxjs';
import { Doctor } from 'models/doctor.model';
import { DoctorService } from 'app/services/doctor.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-visit',
  templateUrl: './form-visit.component.html',
  styleUrls: ['./form-visit.component.css']
})
export class FormVisitComponent implements OnInit {

  @Input() visit: Visit;
  @Input() isEdit: boolean;
  @Output() confirmation: EventEmitter<Visit>;
  @Output() delete: EventEmitter<MouseEvent>;

  doctors$: Observable<Doctor[]>;
  form: FormGroup;

  constructor(
    private doctorService: DoctorService,
    private fb: FormBuilder
  ) {
    this.confirmation = new EventEmitter();
    this.delete = new EventEmitter();
  }

  ngOnInit(): void {
    this.doctors$ = this.doctorService.getAllDoctors();
    this.form = this.fb.group({
      id: [this.visit.id],
      doctorId: [this.visit.doctorId, Validators.required],
      date: [this.visit.date, Validators.required],
      notes: [this.visit.notes]
    })
  }

  onConfirmation(): void {
    this.confirmation.emit(this.form.value);
  }

  onDelete(): void {
    this.delete.emit();
  }

  get date() { return this.form.get('date'); }
  get notes() { return this.form.get('names'); }
  get doctorId() { return this.form.get('doctorId'); }

}

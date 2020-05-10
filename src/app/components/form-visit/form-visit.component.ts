import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Visit } from 'models/visit.model';
import { Observable } from 'rxjs';
import { Doctor } from 'models/doctor.model';
import { DoctorService } from 'app/services/doctor.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-visit',
  templateUrl: './form-visit.component.html',
  styleUrls: ['./form-visit.component.css']
})
export class FormVisitComponent implements OnInit {

  @Input() visit: Visit;
  @Input() isEdit: boolean;
  @Input() title: String;
  @Input() button: String;
  @Output() confirmation: EventEmitter<Visit>;
  @Output() delete: EventEmitter<MouseEvent>;

  doctors$: Observable<Doctor[]>;
  form: FormGroup;

  constructor(
    private doctorService: DoctorService,
  ) {
    this.confirmation = new EventEmitter();
    this.delete = new EventEmitter();
  }

  ngOnInit(): void {
    this.doctors$ = this.doctorService.getAllDoctors();
    this.form = new FormGroup({
      'id': new FormControl(this.visit.id),
      'doctorId': new FormControl(this.visit.doctorId, [
        Validators.required
      ]),
      'date': new FormControl(this.visit.date, [
        Validators.required
      ]),
      'note': new FormControl(this.visit.note)
    });
  }

  onConfirmation(): void {
    console.log(this.form.value)
    // this.confirmation.emit(this.form.value);
  }

  onDelete(): void {
    this.delete.emit();
  }

  get date() { return this.form.get('date'); }
  get note() { return this.form.get('name'); }
  get doctorId() { return this.form.get('doctorId'); }

}

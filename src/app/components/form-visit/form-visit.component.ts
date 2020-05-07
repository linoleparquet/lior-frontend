import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Visit } from 'models/visit.model';
import { Observable } from 'rxjs';
import { Doctor } from 'models/doctor.model';
import { DoctorService } from 'app/services/doctor.service';
import { VisitService } from 'app/services/visit.service';

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
  @Output() confirmation: EventEmitter<MouseEvent>;
  @Output() delete: EventEmitter<MouseEvent>;

  // event emitter?
  doctors$: Observable<Doctor[]>;

  constructor(
    private doctorService: DoctorService,
  ) {
    this.confirmation = new EventEmitter();
    this.delete = new EventEmitter();
  }

  ngOnInit(): void {
    this.doctors$ = this.doctorService.getAllDoctors();
  }
  getTitle(): String {
    if (this.isEdit) {
      return "Edit Visit";
    }
    return "New Visit";

  }

  getConfimrationButton(): String {
    if (this.isEdit) {
      return "Update";
    }
    return "Confirm";
  }

  onConfirmation(): void {
    this.confirmation.emit();
  }

  onDelete(): void {
    this.delete.emit();
  }

}

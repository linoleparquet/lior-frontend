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
  @Output() confirmation: EventEmitter<MouseEvent>;
  @Output() delete: EventEmitter<MouseEvent>;

  // event emitter?
  doctors$: Observable<Doctor[]>;

  constructor(
    private doctorService: DoctorService,
    private visitService: VisitService
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
    // if (this.isEdit) {
    //   this.visitService.putUpdateOneVisit(this.visit);
    // } else {
    //   this.visitService.postCreateNewVisit(this.visit);
    // }
    this.confirmation.emit();
  }

  onDelete(): void {
    // this.visitService.deleteOneVisit(this.visit.id);
    this.delete.emit();
  }

}

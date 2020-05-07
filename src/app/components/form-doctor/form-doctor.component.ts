import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Doctor } from 'models/doctor.model';

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


  constructor() {
    this.confirmation = new EventEmitter();
    this.delete = new EventEmitter();
  }

  ngOnInit(): void {
  }

  onConfirmation(): void {
    this.confirmation.emit();
  }

  onDelete(): void {
    this.delete.emit();
  }

}

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DEPARTMENT } from 'assets/json/departments';
import { Establishment } from 'models/establishment.model';


@Component({
  selector: 'app-form-establishment',
  templateUrl: './form-establishment.component.html',
  styleUrls: ['./form-establishment.component.css']
})
export class FormEstablishmentComponent implements OnInit {

  @Input() establishment: Establishment;
  @Input() isEdit: boolean;
  @Output() confirmation: EventEmitter<Establishment>;
  @Output() delete: EventEmitter<MouseEvent>;

  form: FormGroup;
  departmentSuggestion: any[];


  constructor() {
    this.confirmation = new EventEmitter<Establishment>();
    this.delete = new EventEmitter<MouseEvent>();
  }

  ngOnInit(): void {
    this.departmentSuggestion = DEPARTMENT;
    this.form = new FormGroup({
      'id': new FormControl(this.establishment.id, []),
      'name': new FormControl(this.establishment.name, [
        Validators.required
      ]),
      'department': new FormControl(this.establishment.department, [
        Validators.required
      ]),
      'city': new FormControl(this.establishment.city, [
        Validators.required
      ]),
      'address': new FormControl(this.establishment.address, [
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

  get name() { return this.form.get('name') }
  get department() { return this.form.get('department') }
  get city() { return this.form.get('city') }
  get address() { return this.form.get('address') }

}

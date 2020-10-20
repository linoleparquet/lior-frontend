import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddressService } from 'app/services/address.service';
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

  text: string;

  results: string[];

  search(event) {
      this.addressService.getAdressResults(event.query).subscribe
        (data => {
          this.results = data.features.map(feature => feature.properties.label);
      });
  }

  fillInputs(adress) {
    this.addressService.getAdressResults(adress).subscribe(
      data => {
        this.form.controls['department'].setValue(data.features[0].properties.context);
        this.form.controls['city'].setValue(data.features[0].properties.city);
        this.form.controls['address'].setValue(data.features[0].properties.name);
        this.form.controls['x'].setValue(data.features[0].geometry.coordinates[0]);
        this.form.controls['y'].setValue(data.features[0].geometry.coordinates[1]);
      }
    )
  }

  constructor(private addressService: AddressService) {
    this.confirmation = new EventEmitter<Establishment>();
    this.delete = new EventEmitter<MouseEvent>();
  }

  ngOnInit(): void {
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
      ]),
      'x': new FormControl(this.establishment.x, [
        Validators.required
      ]),
      'y': new FormControl(this.establishment.y, [
        Validators.required
      ]),
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

  // comment l'utiliser?
  set name(value) { this.form.controls['name'].setValue(value)}

}

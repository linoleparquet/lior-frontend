import { EventEmitter, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AddressService } from 'app/services/address.service';
import { userPreference } from 'models/user-preference.model';

@Component({
  selector: 'app-form-user-preference',
  templateUrl: './form-user-preference.component.html',
  styleUrls: ['./form-user-preference.component.css']
})
export class FormUserPreferenceComponent implements OnInit {

  @Input() userPreference: userPreference;
  @Output() confirmation: EventEmitter<userPreference>;
  form: FormGroup;
  results: string[];

  constructor(
    private fb: FormBuilder,
    private addressService: AddressService
    )
     { this.confirmation = new EventEmitter<userPreference>(); }

  ngOnInit(): void {
    this.form = this.fb.group({
      id: [this.userPreference.id],
      name: [this.userPreference.name],
      earliestStart: [this.userPreference.earliestStart, Validators.required], 
      latestArrival: [this.userPreference.latestArrival, Validators.required],
      waitingTime: [this.userPreference.waitingTime, Validators.required],
      maxDestinationPerDay: [this.userPreference.maxDestinationPerDay, Validators.required],
      locationName: [this.userPreference.locationName],
      x: [this.userPreference.x, Validators.required],
      y: [this.userPreference.y, Validators.required]
    })
    }

  onConfirmation(): void {
    this.confirmation.emit(this.form.value); 
  }

  search(event) {
    this.addressService.getAdressResults(event.query).subscribe
      (data => {
        this.results = data.features.map(feature => feature.properties.label);
    });
}

fillInputs(adress: String) {
  this.addressService.getAdressResults(adress).subscribe(
    data => {
      this.form.controls['x'].setValue(data.features[0].geometry.coordinates[0]);
      this.form.controls['y'].setValue(data.features[0].geometry.coordinates[1]);
    }
  )
}

  get earliestStart() { return this.form.get('earliestStart') }
  get latestArrival() { return this.form.get('latestArrival') }
  get waitingTime() { return this.form.get('waitingTime') }
  get maxDestinationPerDay() { return this.form.get('maxDestinationPerDay') }
  get locationName() { return this.form.get('locationName') }
}

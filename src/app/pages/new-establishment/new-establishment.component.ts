import { Component, OnInit } from "@angular/core";
import { Establishment } from "models/establishment.model";
import { Location } from "@angular/common";
import { EstablishmentService } from "app/services/establishment.service";

@Component({
  selector: "app-new-establishment",
  templateUrl: "./new-establishment.component.html",
  styleUrls: ["./new-establishment.component.css"],
})
export class NewEstablishmentComponent implements OnInit {
  establishment: Establishment;

  constructor(
    private establishmentService: EstablishmentService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.establishment = new Establishment();
  }

  create(establishment: Establishment) {
    this.establishmentService
      .postCreateOneEstablishment(establishment)
      .subscribe(() => this.location.back());
  }
}

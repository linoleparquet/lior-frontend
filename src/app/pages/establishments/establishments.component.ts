import { Component, OnInit } from "@angular/core";
import { EstablishmentService } from "app/services/establishment.service";
import { Establishment } from "models/establishment.model";
import { Observable } from "rxjs";

@Component({
  selector: "app-establishments",
  templateUrl: "./establishments.component.html",
  styleUrls: ["./establishments.component.css"],
})
export class EstablishmentsComponent implements OnInit {
  establishments$: Observable<Establishment[]>;

  constructor(private establishmentService: EstablishmentService) {}

  ngOnInit(): void {
    this.establishments$ = this.establishmentService.getAllEstablishments();
  }
}

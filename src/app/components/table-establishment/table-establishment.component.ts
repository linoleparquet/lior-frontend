import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Establishment } from "models/establishment.model";

@Component({
  selector: "app-table-establishment",
  templateUrl: "./table-establishment.component.html",
  styleUrls: ["./table-establishment.component.css"],
})
export class TableEstablishmentComponent implements OnInit {
  @Input() title: String;
  @Input() establishments: Establishment[];
  @Input() isAddEstablishmentButton: boolean;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  OpenEstablishmentPage(id: number) {
    this.router.navigate([`/establishments/${id}/view`]);
  }
}

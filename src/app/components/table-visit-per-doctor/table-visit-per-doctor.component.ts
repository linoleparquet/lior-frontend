import { Component, OnInit, Input } from "@angular/core";
import { Visit } from "models/visit.model";
import { Router } from "@angular/router";

@Component({
  selector: "app-table-visit-per-doctor",
  templateUrl: "./table-visit-per-doctor.component.html",
  styleUrls: ["./table-visit-per-doctor.component.css"],
})
export class TableVisitPerDoctorComponent implements OnInit {
  @Input() visits: Visit[];

  constructor(public router: Router) {}

  ngOnInit(): void {}

  openEditVisitPage(id: number) {
    this.router.navigate([`/visits/${id}/edit`]);
  }
}

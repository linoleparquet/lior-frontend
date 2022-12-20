import { Component, OnInit } from "@angular/core";
import { Doctor } from "models/doctor.model";
import { Location } from "@angular/common";
import { DoctorService } from "app/services/doctor.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-new-doctor",
  templateUrl: "./new-doctor.component.html",
  styleUrls: ["./new-doctor.component.css"],
})
export class NewDoctorComponent implements OnInit {
  doctor: Doctor;

  constructor(
    private route: ActivatedRoute,
    private doctorService: DoctorService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.doctor = new Doctor();
    this.route.queryParams.subscribe((params) => {
      this.doctor.establishmentId =
        Number(params["establishment"]) || undefined;
    });
  }

  create(doctor: Doctor) {
    this.doctorService
      .postCreateOneDoctor(doctor)
      .subscribe(() => this.location.back());
  }
}

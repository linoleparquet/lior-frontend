import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { EstablishmentService } from "app/services/establishment.service";
import { Establishment } from "models/establishment.model";
import { Location } from "@angular/common";

@Component({
  selector: "app-edit-establishment",
  templateUrl: "./edit-establishment.component.html",
  styleUrls: ["./edit-establishment.component.css"],
})
export class EditEstablishmentComponent implements OnInit {
  establishment: Establishment;
  displayModal: boolean;

  constructor(
    private establishmentService: EstablishmentService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get("id");
    this.establishmentService
      .getOneEstablishment(id)
      .toPromise()
      .then((data) => (this.establishment = data));
  }

  update(establishment: Establishment) {
    this.establishmentService
      .putUpdateOneEstablishment(establishment)
      .subscribe(() => this.location.back());
  }

  delete(id: number) {
    this.establishmentService.deleteOneEstablishment(id).subscribe(() => {
      this.router.navigate(["/establishments"]);
      this.toggleModal();
    });
  }

  toggleModal() {
    this.displayModal = !this.displayModal;
  }
}

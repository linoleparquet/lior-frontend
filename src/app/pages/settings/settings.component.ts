import { Component, OnInit } from "@angular/core";
import { UserPreferenceService } from "app/services/user-preference.service";
import { userPreference } from "models/user-preference.model";
import { Observable } from "rxjs";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.css"],
})
export class SettingsComponent implements OnInit {
  userPreference$: Observable<any>;

  constructor(
    private userPreferenceSerice: UserPreferenceService
  ) // private location: Location
  {}

  ngOnInit(): void {
    this.userPreference$ = this.userPreferenceSerice.getDefaultUserPreference();
  }

  update(userPreference: userPreference) {
    this.userPreferenceSerice
      .putUpdateOneUserPreference(userPreference)
      .subscribe(() => console.log("this.location.back()"));
  }
}

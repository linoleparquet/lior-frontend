import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { EditDoctorComponent } from "app/pages/edit-doctor/edit-doctor.component";
import { EditVisitComponent } from "app/pages/edit-visit/edit-visit.component";
import { DoctorsComponent } from "app/pages/doctors/doctors.component";
import { DoctorComponent } from "app/pages/doctor/doctor.component";
import { VisitsComponent } from "app/pages/visits/visits.component";
import { TableDoctorComponent } from "app/components/table-doctor/table-doctor.component";
import { FormDoctorComponent } from "app/components/form-doctor/form-doctor.component";
import { FormVisitComponent } from "app/components/form-visit/form-visit.component";
import { NewVisitComponent } from "app/pages/new-visit/new-visit.component";
import { NewDoctorComponent } from "app/pages/new-doctor/new-doctor.component";
import { TableVisitPerDoctorComponent } from "app/components/table-visit-per-doctor/table-visit-per-doctor.component";
import { TableVisitComponent } from "app/components/table-visit/table-visit.component";
import { FormUserPreferenceComponent } from "app/components/form-user-preference/form-user-preference.component";
import { SettingsComponent } from "app/pages/settings/settings.component";

import { TimelineModule } from "primeng/timeline";
import { AutoCompleteModule } from "primeng/autocomplete";
import { TableModule } from "primeng/table";
import { DialogModule } from "primeng/dialog";
import { ProgressSpinnerModule } from "primeng/progressspinner";
import { EstablishmentComponent } from "app/pages/establishment/establishment.component";
import { EditEstablishmentComponent } from "app/pages/edit-establishment/edit-establishment.component";
import { NewEstablishmentComponent } from "app/pages/new-establishment/new-establishment.component";
import { TableEstablishmentComponent } from "app/components/table-establishment/table-establishment.component";
import { EstablishmentsComponent } from "app/pages/establishments/establishments.component";
import { FormEstablishmentComponent } from "app/components/form-establishment/form-establishment.component";
import { MapComponent } from "app/components/map/map.component";
import { FindRouteComponent } from "app/components/find-route/find-route.component";
import { TimetableComponent } from "app/components/map/timetable/timetable.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    DialogModule,
    ProgressSpinnerModule,
    AutoCompleteModule,
    TimelineModule,
  ],
  declarations: [
    DashboardComponent,
    EditDoctorComponent,
    EditVisitComponent,
    DoctorsComponent,
    DoctorComponent,
    VisitsComponent,
    TableDoctorComponent,
    FormDoctorComponent,
    FormVisitComponent,
    NewVisitComponent,
    NewDoctorComponent,
    TableVisitPerDoctorComponent,
    TableVisitComponent,
    EstablishmentComponent,
    NewEstablishmentComponent,
    EditEstablishmentComponent,
    TableEstablishmentComponent,
    EstablishmentsComponent,
    FormEstablishmentComponent,
    MapComponent,
    FindRouteComponent,
    FormUserPreferenceComponent,
    SettingsComponent,
    TimetableComponent,
  ],
})
export class AdminLayoutModule {}

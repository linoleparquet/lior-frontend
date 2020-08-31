import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditDoctorComponent } from 'app/pages/edit-doctor/edit-doctor.component';
import { EditVisitComponent } from 'app/pages/edit-visit/edit-visit.component';
import { DoctorsComponent } from 'app/pages/doctors/doctors.component';
import { DoctorComponent } from 'app/pages/doctor/doctor.component';
import { VisitsComponent } from 'app/pages/visits/visits.component';
import { TableDoctorComponent } from 'app/components/table-doctor/table-doctor.component';
import { FormDoctorComponent } from 'app/components/form-doctor/form-doctor.component';
import { FormVisitComponent } from 'app/components/form-visit/form-visit.component';
import { NewVisitComponent } from 'app/pages/new-visit/new-visit.component';
import { NewDoctorComponent } from 'app/pages/new-doctor/new-doctor.component';
import { TableVisitPerDoctorComponent } from 'app/components/table-visit-per-doctor/table-visit-per-doctor.component';
import { TableVisitComponent } from 'app/components/table-visit/table-visit.component';


import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';




@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    DialogModule

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
    TableVisitComponent
  ]
})

export class AdminLayoutModule { }

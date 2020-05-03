import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { Table1Component } from '../../pages/table1/table1.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TableVisitComponent } from 'app/components/table-visit/table-visit.component';
import { EditDoctorComponent } from 'app/components/edit-doctor/edit-doctor.component';
import { EditVisitComponent } from 'app/components/edit-visit/edit-visit.component';
import { DoctorsComponent } from 'app/pages/doctors/doctors.component';
import { DoctorComponent } from 'app/pages/doctor/doctor.component';
import { VisitsComponent } from 'app/pages/visits/visits.component';



@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    NgbModule
  ],
  declarations: [
    DashboardComponent,
    UserComponent,
    Table1Component,
    TypographyComponent,
    IconsComponent,
    NotificationsComponent,
    TableVisitComponent,
    EditDoctorComponent,
    EditVisitComponent,
    DoctorsComponent,
    DoctorComponent,
    VisitsComponent

  ]
})

export class AdminLayoutModule { }

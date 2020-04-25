import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AdminLayoutRoutes } from './admin-layout.routing';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { TableDoctorComponent } from 'app/components/table-doctor/table-doctor.component';
import { TableVisitComponent } from 'app/components/table-visit/table-visit.component';
import { EditDoctorComponent } from 'app/components/edit-doctor/edit-doctor.component';
import { EditVisitComponent } from 'app/components/edit-visit/edit-visit.component';


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
    TableComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NotificationsComponent,
    TableDoctorComponent,
    TableVisitComponent,
    EditDoctorComponent,
    EditVisitComponent

  ]
})

export class AdminLayoutModule { }

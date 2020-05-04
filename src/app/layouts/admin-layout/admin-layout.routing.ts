import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { Table1Component } from '../../pages/table1/table1.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { DoctorsComponent } from 'app/pages/doctors/doctors.component';
import { VisitsComponent } from 'app/pages/visits/visits.component';
import { EditDoctorComponent } from 'app/components/edit-doctor/edit-doctor.component';
import { EditVisitComponent } from 'app/components/edit-visit/edit-visit.component';
import { DoctorComponent } from 'app/pages/doctor/doctor.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'table', component: Table1Component },
    { path: 'typography', component: TypographyComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'doctors', component: DoctorsComponent },
    { path: 'doctor/:id', component: DoctorComponent },
    { path: 'doctor/:id/edit', component: EditDoctorComponent },
    { path: 'visits', component: VisitsComponent },
    { path: 'visit/:id/edit', component: EditVisitComponent },
];

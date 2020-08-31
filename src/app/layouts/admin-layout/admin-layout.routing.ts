import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { DoctorsComponent } from 'app/pages/doctors/doctors.component';
import { VisitsComponent } from 'app/pages/visits/visits.component';
import { EditDoctorComponent } from 'app/pages/edit-doctor/edit-doctor.component';
import { EditVisitComponent } from 'app/pages/edit-visit/edit-visit.component';
import { DoctorComponent } from 'app/pages/doctor/doctor.component';
import { NewDoctorComponent } from 'app/pages/new-doctor/new-doctor.component';
import { NewVisitComponent } from 'app/pages/new-visit/new-visit.component';
import { FixedPluginComponent } from 'app/shared/fixedplugin/fixedplugin.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'doctors', component: DoctorsComponent },
    { path: 'doctor/:id', component: DoctorComponent },
    { path: 'doctor/:id/edit', component: EditDoctorComponent },
    { path: 'doctors/new', component: NewDoctorComponent },
    { path: 'visits', component: VisitsComponent },
    { path: 'visit/:id/edit', component: EditVisitComponent },
    { path: 'visits/new', component: NewVisitComponent },
    { path: 'settings', component: FixedPluginComponent }
];

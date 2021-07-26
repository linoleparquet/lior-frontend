import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { DoctorsComponent } from 'app/pages/doctors/doctors.component';
import { VisitsComponent } from 'app/pages/visits/visits.component';
import { EditDoctorComponent } from 'app/pages/edit-doctor/edit-doctor.component';
import { EditVisitComponent } from 'app/pages/edit-visit/edit-visit.component';
import { DoctorComponent } from 'app/pages/doctor/doctor.component';
import { NewDoctorComponent } from 'app/pages/new-doctor/new-doctor.component';
import { NewVisitComponent } from 'app/pages/new-visit/new-visit.component';
import { EstablishmentComponent } from 'app/pages/establishment/establishment.component';
import { EditEstablishmentComponent } from 'app/pages/edit-establishment/edit-establishment.component';
import { NewEstablishmentComponent } from 'app/pages/new-establishment/new-establishment.component';
import { EstablishmentsComponent } from 'app/pages/establishments/establishments.component';
import { SettingsComponent } from 'app/pages/settings/settings.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'doctors', component: DoctorsComponent },
    { path: 'doctors/:id/view', component: DoctorComponent },
    { path: 'doctors/:id/edit', component: EditDoctorComponent },
    { path: 'doctors/new', component: NewDoctorComponent },
    { path: 'visits', component: VisitsComponent },
    { path: 'visits/:id/edit', component: EditVisitComponent },
    { path: 'visits/new', component: NewVisitComponent },
    { path: 'settings', component: SettingsComponent },
    { path: 'establishments', component: EstablishmentsComponent },
    { path: 'establishments/:id/view', component: EstablishmentComponent },
    { path: 'establishments/:id/edit', component: EditEstablishmentComponent },
    { path: 'establishments/new', component: NewEstablishmentComponent },
    
];

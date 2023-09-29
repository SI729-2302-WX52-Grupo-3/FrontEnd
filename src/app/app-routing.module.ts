import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { LogInComponent } from './views/patients/log-in/log-in.component';
import { MedicalHistoryComponent } from './components/medical-history/medical-history.component';
import { DoctorProfileComponent } from './components/doctor-profile/doctor-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'patientsLogIn', component: LogInComponent },
  { path: 'medical-history', component: MedicalHistoryComponent },
  { path: 'doctor-profile', component: DoctorProfileComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

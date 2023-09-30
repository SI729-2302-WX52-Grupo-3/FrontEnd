import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { LogInComponent } from './views/patients/log-in/log-in.component';
import { MedicalHistoryComponent } from './components/medical-history/medical-history.component';
import { DoctorProfileComponent } from './components/doctor-profile/doctor-profile.component';
import {ChangePasswordComponent} from "./components/change-password/change-password.component";
import {
  SuccesfullChangePasswordComponent
} from "./components/succesfull-change-password/succesfull-change-password.component";
import {DashboardComponent} from "./views/patients/dashboard/dashboard.component";
import {ProfileComponent} from "./views/patients/profile/profile.component";
import {ReviewsComponent} from "./components/reviews/reviews.component";
import {NewReviewComponent} from "./components/new-review/new-review.component";
import {DoctorsComponent} from "./components/doctors/doctors.component";
import {AppointmentComponent} from "./components/appointment/appointment.component";
import { NewMedicalHistoryComponent } from './components/new-medical-history/new-medical-history.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'patientsLogIn', component: LogInComponent },
  { path: 'medical-history', component: MedicalHistoryComponent },
  { path: 'doctor-profile', component: DoctorProfileComponent },
  { path: 'change-password', component: ChangePasswordComponent},
  { path: 'patientsSuccesfullChangePassword', component: SuccesfullChangePasswordComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'new-review', component: NewReviewComponent },
  { path: 'doctors', component: DoctorsComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'new-medical-history', component: NewMedicalHistoryComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

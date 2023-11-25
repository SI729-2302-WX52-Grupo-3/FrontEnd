import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { LogInComponent } from './views/patients/log-in/log-in.component';
import { MedicalHistoryComponent } from './components/medical-history/medical-history.component';
import { DoctorProfileComponent } from './components/doctor-profile/doctor-profile.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { SuccesfullChangePasswordComponent } from './components/succesfull-change-password/succesfull-change-password.component';
import { DashboardComponent } from './views/patients/dashboard/dashboard.component';
import { ProfileComponent } from './views/patients/profile/profile.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { NewReviewComponent } from './components/new-review/new-review.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { NewMedicalHistoryComponent } from './components/new-medical-history/new-medical-history.component';
import { NewPharmacyComponent } from './components/pharmacy/pharmacy.component';
import { MainDashboardComponent } from './views/patients/main-dashboard/main-dashboard.component';
import { DoctorsListComponent } from './views/patients/doctors-list/doctors-list.component';
import { RecordComponent } from './views/patients/record/record.component';
import { PaymentComponent } from './components/payment/payment.component';
import { DoctorsLoginComponent } from './components/doctors-login/doctors-login.component';
import { LoginComponent } from './views/doctors/login/login.component';
import { PatientsListComponent } from './views/doctors/patients-list/patients-list.component';
import { PatientProfileComponent } from './components/patient-profile/patient-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'edit-profile/:id', component: EditProfileComponent },
  { path: 'patientsLogIn', component: LogInComponent },
  { path: 'doctorsLogIn', component: LoginComponent },
  { path: 'medical-history', component: RecordComponent },
  // { path: 'doctor-profile', component: DoctorProfileComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  {
    path: 'patientsSuccesfullChangePassword',
    component: SuccesfullChangePasswordComponent,
  },
  { path: 'dashboard', component: MainDashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'reviews', component: ReviewsComponent },
  { path: 'new-review', component: NewReviewComponent },
  { path: 'doctors', component: DoctorsListComponent },
  { path: 'patients', component: PatientsListComponent },
  { path: 'doctors/:id', component: DoctorProfileComponent },
  { path: 'patients/:id', component: PatientProfileComponent },
  { path: 'appointment/doctor/:id', component: AppointmentComponent },
  { path: 'new-medical-history', component: NewMedicalHistoryComponent },
  { path: 'pharmacy', component: NewPharmacyComponent },
  { path: 'appointment/:id/payment', component: PaymentComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

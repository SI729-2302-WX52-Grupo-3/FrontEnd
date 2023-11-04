import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { LogInCardComponent } from './components/log-in-card/log-in-card.component';
import { LogInComponent } from './views/patients/log-in/log-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { HomeComponent } from './views/home/home.component';
import { AppRoutingModule } from './app-routing.module';

import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { DoctorProfileComponent } from './components/doctor-profile/doctor-profile.component';
import { MedicalHistoryComponent } from './components/medical-history/medical-history.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { SuccesfullChangePasswordComponent } from './components/succesfull-change-password/succesfull-change-password.component';
import { DashboardComponent } from './views/patients/dashboard/dashboard.component';
import { ProfileComponent } from './views/patients/profile/profile.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { NewReviewComponent } from './components/new-review/new-review.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { AppointmentComponent } from './components/appointment/appointment.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
// import { MatTimepickerModule } from 'mat-timepicker';
import { MatTableModule } from '@angular/material/table';
import { NewMedicalHistoryComponent } from './components/new-medical-history/new-medical-history.component';
import { MedicalHistorFormComponent } from './components/medical-histor-form/medical-histor-form.component';
import { HttpClientModule } from '@angular/common/http';
import { NewPharmacyComponent } from './components/pharmacy/pharmacy.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MainDashboardComponent } from './views/patients/main-dashboard/main-dashboard.component';
import { DoctorsListComponent } from './views/patients/doctors-list/doctors-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EditProfileComponent,
    DoctorProfileComponent,
    MedicalHistoryComponent,
    LogInCardComponent,
    LogInComponent,
    ToolbarComponent,

    HomeComponent,
    ToolbarComponent,
    ChangePasswordComponent,
    SuccesfullChangePasswordComponent,
    DashboardComponent,
    ProfileComponent,
    EditProfileComponent,
    ReviewsComponent,
    NewReviewComponent,
    DoctorsComponent,
    AppointmentComponent,
    NewMedicalHistoryComponent,
    MedicalHistorFormComponent,
    NewPharmacyComponent,
    MainDashboardComponent,
    DoctorsListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    FormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatToolbarModule,
    MatDatepickerModule,
    MatNativeDateModule,
    // MatTimepickerModule,
    ReactiveFormsModule,
    MatTableModule,

    HttpClientModule,
    MatSidenavModule,

    MatListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

//Angie

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { LogInCardComponent } from './components/log-in-card/log-in-card.component';
import { LogInComponent } from './views/patients/log-in/log-in.component';
import { FormsModule } from '@angular/forms';
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

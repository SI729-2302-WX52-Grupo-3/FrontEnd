import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./views/home/home.component";
import {EditProfileComponent} from "./components/edit-profile/edit-profile.component";
import {LogInComponent} from "./views/patients/log-in/log-in.component"


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'edit-profile', component: EditProfileComponent },
  { path: 'patientsLogIn', component: LogInComponent },






];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

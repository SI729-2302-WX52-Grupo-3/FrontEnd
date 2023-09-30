import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-succesfull-change-password',
  templateUrl: './succesfull-change-password.component.html',
  styleUrls: ['./succesfull-change-password.component.css']
})
export class SuccesfullChangePasswordComponent {
  constructor(private router: Router) {
  }

  login(){
    this.router.navigate(['/patientsLogIn']);

  }
}

import { Component } from '@angular/core';
import {Patient} from "../../../interfaces/patient";
import {AuthService} from "../../../shared/auth.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  patient: Patient ={ dni: '', name: 'Angie', gender:'', birthday: '', email:'', cellphone: '', password:'', photo:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/2048px-Emblem-person-blue.svg.png"};


  constructor(public authService: AuthService) {

  }
}

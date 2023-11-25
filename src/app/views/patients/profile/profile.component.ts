import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/interfaces/doctor';
import { Patient } from 'src/app/interfaces/patient';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
  user: any = null;

  constructor() {}

  getUser() {
    this.user = JSON.parse(localStorage.getItem('user')!);
  }

  ngOnInit(): void {
    this.getUser();
  }
}

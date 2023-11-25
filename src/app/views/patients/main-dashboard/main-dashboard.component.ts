import { Component } from '@angular/core';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css'],
})
export class MainDashboardComponent {
  isDoctor = false;

  constructor() {
    this.isDoctor = localStorage.getItem('doctor') === 'true';
  }
}

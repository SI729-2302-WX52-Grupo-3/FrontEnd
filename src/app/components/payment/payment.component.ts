import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  location: Location;

  constructor(location: Location) {
    this.location = location;
    console.log(this.location);
  }
}

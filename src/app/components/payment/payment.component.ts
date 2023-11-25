import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent {
  appointmentId: string | null = '';

  payForm = new FormGroup({
    cardHolder: new FormControl(''),
    cardNumber: new FormControl(''),
    expirationDate: new FormControl(''),
    cvv: new FormControl(''),
  });

  constructor(private route: ActivatedRoute) {
    this.appointmentId = this.route.snapshot.paramMap.get('id');
    console.log(this.appointmentId);
  }
  pay() {
    const data = {
      ...this.payForm.getRawValue(),
      appointmentId: this.appointmentId,
    };
    console.log(data);
  }
}

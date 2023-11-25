import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from 'src/app/shared/payment.service';

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

  constructor(
    private route: ActivatedRoute,
    private paymentService: PaymentService,
    private router: Router
  ) {
    this.appointmentId = this.route.snapshot.paramMap.get('id');
    console.log(this.appointmentId);
  }
  pay() {
    const data = {
      ...this.payForm.getRawValue(),
      appointment: this.appointmentId,
    };
    this.paymentService.create(data).subscribe((res: any) => {
      console.log(res);

      this.router.navigate([`/dashboard`]);
    });
  }
}

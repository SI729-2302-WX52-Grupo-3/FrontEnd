import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Patient } from '../../interfaces/patient';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css'],
})
export class ChangePasswordComponent {
  changePasswordForm: FormGroup;
  patient: Patient = {
    id: 1,
    name: '',
    age: '',
    email: '',
    password: '',
    lastName: '',
    photo:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Emblem-person-blue.svg/2048px-Emblem-person-blue.svg.png',
  };

  constructor(public builder: FormBuilder, private router: Router) {
    this.changePasswordForm = this.builder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repeat_password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get email() {
    return this.changePasswordForm.controls['email'];
  }

  get password() {
    return this.changePasswordForm.controls['password'];
  }

  save() {
    this.router.navigate(['/patientsSuccesfullChangePassword']);
  }
}

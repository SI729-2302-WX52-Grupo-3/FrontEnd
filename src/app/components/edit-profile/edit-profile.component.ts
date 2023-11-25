import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Patient } from 'src/app/interfaces/patient';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  user: Patient | null = null;

  updatePatientForm = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl(''),
  });

  constructor() {}

  updatePatient() {
    console.log(this.updatePatientForm.getRawValue());
  }

  getUser() {
    this.user = JSON.parse(localStorage.getItem('user')!);
  }

  ngOnInit(): void {
    this.getUser();
    this.updatePatientForm.patchValue({
      name: this.user?.name,
      lastName: this.user?.lastName,
      age: this.user?.age,
      email: this.user?.email,
    });
  }
}

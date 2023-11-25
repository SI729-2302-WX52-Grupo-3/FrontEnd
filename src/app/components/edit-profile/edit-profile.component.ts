import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Patient } from 'src/app/interfaces/patient';
import { DoctorService } from 'src/app/shared/doctor.service';
import { PatientService } from 'src/app/shared/patient.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css'],
})
export class EditProfileComponent implements OnInit {
  user: Patient | null = null;
  isDoctor = false;

  updatePatientForm = new FormGroup({
    name: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    age: new FormControl(''),
    speciality: new FormControl(''),
  });

  constructor(
    private patientService: PatientService,
    private doctorService: DoctorService
  ) {
    this.isDoctor = localStorage.getItem('doctor') === 'true';
  }

  updatePatient() {
    if (this.isDoctor) {
      const { age, lastName, ...rest } = this.updatePatientForm.getRawValue();
      const data = {
        ...rest,
        lastname: lastName,
        email: this.user?.email,
        password: this.user?.password,
      };
      this.doctorService.update(this.user?.id, data).subscribe((res: any) => {
        console.log(res);
        localStorage.setItem('user', JSON.stringify(res));
      });
    } else {
      const { age, speciality, lastName, ...rest } =
        this.updatePatientForm.getRawValue();
      const data = {
        ...rest,
        lastname: lastName,
        age: parseInt(age!),
        email: this.user?.email,
        password: this.user?.password,
      };
      this.patientService.update(this.user?.id, data).subscribe((res: any) => {
        console.log(res);
        localStorage.setItem('user', JSON.stringify(res));
      });
    }
  }

  getUser() {
    this.user = JSON.parse(localStorage.getItem('user')!);
  }

  ngOnInit(): void {
    this.getUser();
    this.updatePatientForm.patchValue({
      name: this.user?.name,
      lastName: this.user?.lastname,
      age: this.user?.age,
      email: this.user?.email,
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/interfaces/doctor';
import { Patient } from 'src/app/interfaces/patient';
import { AppointmentService } from 'src/app/shared/appointment.service';
import { DoctorService } from 'src/app/shared/doctor.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css'],
})
export class AppointmentComponent implements OnInit {
  selectedDate: string = '';
  selectedDateTime: Date | null = null;
  selectedDoctor: string = '';

  appointmentForm: FormGroup;

  doctorId: string | null = '';
  doctor: Doctor | null = null;

  user: Patient | null = null;

  constructor(
    private route: ActivatedRoute,
    private doctorService: DoctorService,
    private fb: FormBuilder,
    private appointmentService: AppointmentService,
    private router: Router
  ) {
    this.doctorId = this.route.snapshot.paramMap.get('id');

    this.appointmentForm = this.fb.group({
      date: [''],
      time: [''],
      description: [''],
    });
    this.user = JSON.parse(localStorage.getItem('user')!);
  }

  getDoctorData(doctorId: string) {
    this.doctorService.getById(doctorId).subscribe((res: any) => {
      this.doctor = res;
    });
  }

  ngOnInit(): void {
    if (this.doctorId) this.getDoctorData(this.doctorId);
  }

  submitappointment(): void {
    const { date, ...rest } = this.appointmentForm.getRawValue();
    const data = {
      ...rest,
      date: new Date(date).toDateString(),
      patientId: this.user?.id,
      doctorId: parseInt(this.doctorId!),
    };
    this.router.navigate([`/appointment/${1}/payment`]);
    // this.appointmentService.create(data).subscribe((res) => {
    //   console.log('Created', res.id);
    // });
  }
}

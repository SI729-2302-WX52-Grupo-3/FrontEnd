import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/interfaces/doctor';
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

  constructor(
    private route: ActivatedRoute,
    private doctorService: DoctorService,
    private fb: FormBuilder,
    private appointmentService: AppointmentService
  ) {
    this.doctorId = this.route.snapshot.paramMap.get('id');

    this.appointmentForm = this.fb.group({
      date: [''],
      time: [''],
      description: [''],
    });
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
    const patientId = 1;
    const medicineId = 1;
    const paymentId = 1;
    const { date, ...rest } = this.appointmentForm.getRawValue();
    const data = {
      ...rest,
      date: new Date(date).toDateString(),
      patientId,
      medicineId,
      paymentId,
      doctorId: parseInt(this.doctorId!),
    };
    this.appointmentService.create(data).subscribe((res) => {
      console.log('Created', res.id);
    });
  }
}

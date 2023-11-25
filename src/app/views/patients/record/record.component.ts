import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/interfaces/doctor';
import { Record } from 'src/app/interfaces/record';
import { AppointmentService } from 'src/app/shared/appointment.service';
import { DoctorService } from 'src/app/shared/doctor.service';
import { RecordService } from 'src/app/shared/record.service';

interface RecordAppointment extends Record {
  appointmentDescription: string;
  doctor: Doctor;
}

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css'],
})
export class RecordComponent implements OnInit {
  records: RecordAppointment[] = [];

  constructor(
    private recordService: RecordService,
    private appointmentService: AppointmentService,
    private doctorService: DoctorService
  ) {}

  getAllRecords() {
    this.recordService.getAllById().subscribe((res: any) => {
      console.log('Records: ', res);
      for (const record of res) {
        this.appointmentService
          .getAllById(record.appointmentId)
          .subscribe((r: any) => {
            this.doctorService
              .getById(r.doctorId)
              .subscribe((response: any) => {
                this.records.push({
                  ...record,
                  appointmentDescription: r.description,
                  doctor: response,
                });
              });
          });
      }
    });
  }

  ngOnInit(): void {
    this.getAllRecords();
  }
}

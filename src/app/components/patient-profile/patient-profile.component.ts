import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/interfaces/patient';
import { DoctorService } from 'src/app/shared/doctor.service';
import { PatientService } from 'src/app/shared/patient.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css'],
})
export class PatientProfileComponent implements OnInit {
  doctorId: string | null = '';
  patient: Patient | null = null;

  constructor(
    private route: ActivatedRoute,
    private patientService: PatientService
  ) {
    this.doctorId = this.route.snapshot.paramMap.get('id');
  }

  getDoctorData(heroId: string) {
    this.patientService.getById(heroId).subscribe((res: any) => {
      this.patient = res;
    });
  }

  ngOnInit(): void {
    if (this.doctorId) this.getDoctorData(this.doctorId);
  }
}

import { Component } from '@angular/core';
import { Patient } from 'src/app/interfaces/patient';
import { PatientService } from 'src/app/shared/patient.service';

@Component({
  selector: 'app-patients-list',
  templateUrl: './patients-list.component.html',
  styleUrls: ['./patients-list.component.css'],
})
export class PatientsListComponent {
  patients: Patient[] = [];

  constructor(private patientService: PatientService) {}

  getAllPatients() {
    this.patientService.getAll().subscribe((res: any) => {
      this.patients = res;
    });
  }

  ngOnInit(): void {
    this.getAllPatients();
  }
}

import { Component } from '@angular/core';
import {Patient} from "../../../interfaces/patient";
import {AuthService} from "../../../shared/auth.service";
import {MatTableDataSource} from "@angular/material/table";
import {HttpClient} from "@angular/common/http";
import {MatDialog} from "@angular/material/dialog";
import {FormBuilder, FormGroup} from "@angular/forms";
import {PatientService} from "../../../service/patient.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  data : Patient[] = [];
  dataSource = new MatTableDataSource<Patient>;
  displayedColumns: string[] = ['dni', 'name', 'gender', 'birthdate', 'email', 'cellphone', 'photo', 'edit', 'delete'];

  editForm: FormGroup;

  constructor(private http: HttpClient, public authService: AuthService, private fb: FormBuilder) {

    this.editForm = this.fb.group({
      dni: [''],
      name: [''],
      gender: [''],
      birthdate: [''],
      email: [''],
      cellphone: [''],
      photo: ['']
    });

  }

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/patients').subscribe((data) => {
      console.log(data);
      this.data = data;
      this.dataSource = new MatTableDataSource(this.data);
    });
  }

  editPatient(dni: any) {

    const selectedPatient = this.dataSource.data.find(patient => patient.dni  === dni)

    this.editForm.patchValue({
      dni: selectedPatient!.dni,
      name: selectedPatient!.name,
      gender: selectedPatient!.gender,
      birthdate: selectedPatient!.birthdate,
      email: selectedPatient!.email,
      cellphone: selectedPatient!.cellphone,
      photo: selectedPatient!.photo
    })
  }

  submitEditForm(){
    const patient = this.editForm.getRawValue();

    this.findPatientByDNI(patient.dni).subscribe((patients:any[]) => {
      if (patients.length > 0) {
        const patientId = patients[0].id; // Suponiendo que el ID es un campo en la respuesta
        this.updatePatient(patientId, patient);
      } else {
        console.error('Paciente no encontrado.');
      }
    })
  }


  updatePatient(id: any, patient: any) {
    this.http.put(`http://localhost:3000/patients/${id}`, patient)
      .subscribe(response => {

      });
  }

  findPatientByDNI(dni: string): Observable<any> {
    return this.http.get<any[]>(`http://localhost:3000/patients?dni=${dni}`);
  }

  deletePatient(id: any) {
    this.http.delete(`http://localhost:3000/patients/${id}`)
      .subscribe(response => {
        console.log(response);
      });
  }
}

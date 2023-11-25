import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../../shared/auth.service';
import { Doctor } from '../../interfaces/doctor';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css'],
})
export class DoctorsComponent {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

  data: Doctor[] = [];
  dataSource = new MatTableDataSource<Doctor>();
  displayedColumns: string[] = [
    'id',
    'name',
    'lastname',
    'dni',
    'specialty',
    'email',
    'edit',
    'delete',
  ];

  addForm: FormGroup;
  editForm: FormGroup;

  editVisible = false;
  showAddForm = false;

  isLoggedIn = null;

  constructor(private http: HttpClient, private fb: FormBuilder) {
    this.editForm = this.fb.group({
      id: [''],
      name: [''],
      lastname: [''],
      dni: [''],
      specialty: [''],
      email: [''],
    });

    this.addForm = this.fb.group({
      name: [''],
      lastname: [''],
      dni: [''],
      specialty: [''],
      email: [''],
    });

    this.http.get<any[]>('http://localhost:3000/doctors').subscribe((data) => {
      console.log(data);
      this.data = data;
      this.dataSource = new MatTableDataSource(this.data);
    });
    const user = JSON.parse(localStorage.getItem('user')!);
    console.log('User::', user);
    this.isLoggedIn = user?.id;
    console.log('Login::', this.isLoggedIn);
  }

  submitAddForm() {
    this.http
      .post('http://localhost:3000/doctors', this.addForm.value)
      .subscribe((response) => {
        this.showAddForm = false;
        this.http
          .get<any[]>('http://localhost:3000/doctors')
          .subscribe((data) => {
            console.log(data);
            this.data = data;
            this.dataSource = new MatTableDataSource(this.data);
          });
      });
  }

  submitEditForm() {
    this.http
      .put(
        `http://localhost:3000/doctors/${this.editForm.value.id}`,
        this.editForm.value
      )
      .subscribe((response) => {
        this.editVisible = false;
        this.http
          .get<any[]>('http://localhost:3000/doctors')
          .subscribe((data) => {
            console.log(data);
            this.data = data;
            this.dataSource = new MatTableDataSource(this.data);
          });
      });
  }

  editDoctor(id: number) {
    this.editVisible = true;
    const selectedDoctor = this.dataSource.data.find(
      (doctor) => doctor.id === id
    );

    this.editForm.patchValue({
      id: selectedDoctor!.id,
      name: selectedDoctor!.name,
      lastname: selectedDoctor!.lastname,
      dni: selectedDoctor!.dni,
      specialty: selectedDoctor!.speciality,
      email: selectedDoctor!.email,
    });
  }

  deleteDoctor(id: number) {
    this.http
      .delete(`http://localhost:3000/doctors/${id}`)
      .subscribe((response) => {
        this.http
          .get<any[]>('http://localhost:3000/doctors')
          .subscribe((data) => {
            console.log(data);
            this.data = data;
            this.dataSource = new MatTableDataSource(this.data);
          });
      });
  }
}

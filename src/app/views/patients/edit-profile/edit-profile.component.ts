import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  birthdate: string;
  phone: string;
  email: string;

  constructor() {
    this.birthdate = 'FECHA_DE_NACIMIENTO';
    this.phone = 'CELULAR';
    this.email = 'CORREO';
  }

  guardarCambios() {
    console.log('Datos guardados:', this.birthdate, this.phone, this.email);
  }
}

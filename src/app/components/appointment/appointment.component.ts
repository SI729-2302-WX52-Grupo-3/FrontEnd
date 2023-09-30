import { Component } from '@angular/core';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  selectedDate: string = '';
  selectedDateTime: Date | null = null;
  selectedDoctor: string = '';
  doctors: any[] = [
    { id: '1', name: 'Doctor 1' },
    { id: '2', name: 'Doctor 2' },
    // Agrega más doctores según sea necesario
  ];

  goToPayment(): void {
    // Aquí puedes implementar la lógica para redirigir al usuario a la página de pago con la información de la cita seleccionada.
  }
}

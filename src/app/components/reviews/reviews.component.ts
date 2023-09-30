import { Component } from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  reviews = [
    {
      nombreUsuario: 'Usuario 1',
      comentario: 'Excelente profesional. Muy recomendado.',
      calificacion: 4.5
    },
    {
      nombreUsuario: 'Usuario 2',
      comentario: 'Gran experiencia con este médico.',
      calificacion: 5.0
    },
  ];
}

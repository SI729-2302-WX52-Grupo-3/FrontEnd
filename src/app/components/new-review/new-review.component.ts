import { Component } from '@angular/core';

@Component({
  selector: 'app-new-review',
  templateUrl: './new-review.component.html',
  styleUrls: ['./new-review.component.css']
})
export class NewReviewComponent {
  doctorName: string = '';
  reviewDescription: string = '';
  stars: any[] = [
    { filled: false },
    { filled: false },
    { filled: false },
    { filled: false },
    { filled: false }
  ];

  toggleStar(star: any): void {
    star.filled = !star.filled;
  }

  publishReview(): void {

  }
}

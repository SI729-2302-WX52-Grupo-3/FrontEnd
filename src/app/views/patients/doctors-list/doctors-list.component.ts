import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/interfaces/doctor';
import { DoctorService } from 'src/app/shared/doctor.service';

@Component({
  selector: 'app-doctors-list',
  templateUrl: './doctors-list.component.html',
  styleUrls: ['./doctors-list.component.css'],
})
export class DoctorsListComponent implements OnInit {
  doctors: Doctor[] = [];

  constructor(private doctorService: DoctorService) {}

  getAllDoctos() {
    this.doctorService.getAll().subscribe((res: any) => {
      console.log('Doctos: ', res);
      this.doctors = res;
    });
  }

  ngOnInit(): void {
    this.getAllDoctos();
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/interfaces/doctor';
import { DoctorService } from 'src/app/shared/doctor.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css'],
})
export class DoctorProfileComponent implements OnInit {
  doctorId: string | null = '';
  doctor: Doctor | null = null;

  constructor(
    private route: ActivatedRoute,
    private doctorService: DoctorService
  ) {
    this.doctorId = this.route.snapshot.paramMap.get('id');
  }

  getDoctorData(heroId: string) {
    this.doctorService.getById(heroId).subscribe((res: any) => {
      this.doctor = res;
    });
  }

  ngOnInit(): void {
    if (this.doctorId) this.getDoctorData(this.doctorId);
  }
}

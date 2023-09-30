import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MedicalHistory } from 'src/app/interfaces/medicalHistory';
import { MedicalHistoryService } from 'src/app/shared/medical-history.service';

@Component({
  selector: 'app-new-medical-history',
  templateUrl: './new-medical-history.component.html',
  styleUrls: ['./new-medical-history.component.css'],
})
export class NewMedicalHistoryComponent implements OnInit, AfterViewInit {
  medicalHistoryData: MedicalHistory;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'id',
    'allergy',
    'pathological',
    'weight',
    'bodyMass',
  ];
  isEditMode = false;

  constructor(private medicalHistoryService: MedicalHistoryService) {
    this.medicalHistoryData = {} as MedicalHistory;
    this.dataSource = new MatTableDataSource<any>();
  }

  private getAllAppointments() {
    this.medicalHistoryService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }

  private deleteAppointment(id: number) {}

  onEditItem(element: MedicalHistory) {
    this.medicalHistoryData = element;
    this.isEditMode = true;
  }
  onDeleteItem(element: MedicalHistory) {
    this.deleteAppointment(element.id);
  }
  onCancelEdit() {
    this.isEditMode = false;
    this.getAllAppointments();
  }

  onMedicalHistoryAdded(medicalHistory: MedicalHistory) {
    this.medicalHistoryData.id = 0;
    this.medicalHistoryData.pacientId = 1;
    this.medicalHistoryService
      .create(this.medicalHistoryData)
      .subscribe((response: any) => {
        this.dataSource.data.push({ ...response });
        this.dataSource.data = this.dataSource.data.map((o: MedicalHistory) => {
          return o;
        });
      });
  }
  onMedicalHistoryUpdated(medicalHistory: MedicalHistory) {}

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.getAllAppointments();
  }
}

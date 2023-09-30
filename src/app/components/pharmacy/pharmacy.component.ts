import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { pharmacy } from 'src/app/interfaces/pharmacy';
import { pharmacyService } from 'src/app/shared/pharmacy.service';

@Component({
  selector: 'app-pharmacy-form',
  templateUrl: './pharmacy.component.html',
  styleUrls: ['./pharmacy.component.css'],
})
export class NewPharmacyComponent implements OnInit, AfterViewInit {
  pharmacyData: pharmacy;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = [
    'id',
    'allergy',
    'pathological',
    'weight',
    'bodyMass',
  ];
  isEditMode = false;

  constructor(private pharmacyService: pharmacyService) {
    this.pharmacyData = {} as pharmacy;
    this.dataSource = new MatTableDataSource<any>();
  }

  private getAllAppointments() {
    this.pharmacyService.getAll().subscribe((response: any) => {
      this.dataSource.data = response;
    });
  }

  private deleteAppointment(id: number) {}

  onEditItem(element: pharmacy) {
    this.pharmacyData = element;
    this.isEditMode = true;
  }
  onDeleteItem(element: pharmacy) {
    this.deleteAppointment(element.id);
  }
  onCancelEdit() {
    this.isEditMode = false;
    this.getAllAppointments();
  }

  onpharmacyAdded(pharmacy: pharmacy) {
    this.pharmacyData.id = 0;
    this.pharmacyService
      .create(this.pharmacyData)
      .subscribe((response: any) => {
        this.dataSource.data.push({ ...response });
        this.dataSource.data = this.dataSource.data.map((o: pharmacy) => {
          return o;
        });
      });
  }
  onpharmacyUpdated(pharmacy: pharmacy) {}

  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.getAllAppointments();
  }
}

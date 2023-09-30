import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { MedicalHistory } from 'src/app/interfaces/medicalHistory';

@Component({
  selector: 'app-medical-histor-form',
  templateUrl: './medical-histor-form.component.html',
  styleUrls: ['./medical-histor-form.component.css'],
})
export class MedicalHistorFormComponent {
  @Output() editCanceled = new EventEmitter();
  @Output() medicalHistoryAdded = new EventEmitter<MedicalHistory>();
  @Output() medicalHistoryUpdated = new EventEmitter<MedicalHistory>();
  @Input() editMode = false;
  @Input() medicalHistory: MedicalHistory;

  @ViewChild('medicalHistoryForm', { static: false })
  medicalHistoryForm!: NgForm;

  constructor() {
    this.medicalHistory = {} as MedicalHistory;
  }
  private resetEditState() {
    this.editMode = false;
    this.medicalHistoryForm.resetForm();
    this.medicalHistory = {} as MedicalHistory;
  }

  onSubmit() {
    if (this.medicalHistoryForm.form.valid) {
      if (this.editMode) {
        this.medicalHistoryUpdated.emit(this.medicalHistory);
      } else {
        this.medicalHistoryAdded.emit(this.medicalHistory);
      }
      this.resetEditState();
    } else {
      console.log('Invalid Data');
    }
  }
  onCancel() {}
}

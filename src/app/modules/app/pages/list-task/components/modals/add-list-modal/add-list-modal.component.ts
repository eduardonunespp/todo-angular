import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'td-add-list-modal',
  templateUrl: './add-list-modal.component.html',
  styleUrls: ['./add-list-modal.component.scss'],
})
export class AddListModalComponent {
  isValidForm: boolean = false;

  constructor(private dialogRef: MatDialogRef<AddListModalComponent>) {}

  closeModal(): void {
    this.dialogRef.close();
  }

  handleFormValid(isValid: boolean) {
    this.isValidForm = isValid;
  }
}

import { Component } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'td-add-list-modal',
  templateUrl: './add-list-modal.component.html',
  styleUrls: ['./add-list-modal.component.scss'],
})
export class AddListModalComponent {
  constructor(private dialogRef: MatDialogRef<AddListModalComponent>) {}

  closeModal(): void {
    this.dialogRef.close();
  }
}

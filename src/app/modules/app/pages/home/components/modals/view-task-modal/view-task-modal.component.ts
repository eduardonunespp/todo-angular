import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-view-task-modal',
  templateUrl: './view-task-modal.component.html',
  styleUrls: ['./view-task-modal.component.scss']
})
export class ViewTaskModalComponent {
  isLoading: boolean = false;
  descricao: string = '';

  constructor(
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private data: { id: string; name: string }
  ) {}

  closeModal(): void {
    this.dialog.closeAll();
  }

  ngAfterViewInit(): void {
    this.descricao = this.data.name;
  }

}

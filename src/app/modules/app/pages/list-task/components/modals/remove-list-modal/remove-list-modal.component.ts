import { Component, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { TaskListService } from 'src/app/modules/app/services/task-list.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-remove-list-modal',
  templateUrl: './remove-list-modal.component.html',
  styleUrls: ['./remove-list-modal.component.scss'],
})
export class RemoveListModalComponent {
  isLoading: boolean = false;
  name: string = this.data.name

  constructor(
    private taskListService: TaskListService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private data: { id: string; name: string }
  ) {}

  closeModal(): void {
    this.dialog.closeAll();
  }

  removeTaskList() {
    this.isLoading = true;
    this.taskListService.removeTaskList(this.data.id).subscribe(
      (response) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Lista removida com sucesso!',
          showConfirmButton: false,
          timer: 1800,
        });
        this.isLoading = false;
        this.closeModal();
      },
      (error) => {
        if (error.status === 401 || error.status === 403) {
          this.closeModal();
        } else {
          const { erros } = error.error;
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: erros,
            showConfirmButton: true,
          });
          this.closeModal();
        }
      }
    );
  }
}

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { TaskService } from 'src/app/modules/app/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-task-modal',
  templateUrl: './delete-task-modal.component.html',
  styleUrls: ['./delete-task-modal.component.scss'],
})
export class DeleteTaskModalComponent {
  isLoading: boolean = false;
  name: string = '';

  constructor(
    private taskService: TaskService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) private data: { id: string; name: string }
  ) {}

  closeModal(): void {
    this.dialog.closeAll();
  }

  ngAfterViewInit(): void {
    this.name = this.data.name;
  }

  concludeTask() {
    this.isLoading = true;
    this.taskService.deleteTask(this.data.id).subscribe(
      (response) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Tarefa excluída com sucesso!',
          showConfirmButton: false,
          timer: 1800,
        });
        this.isLoading = false;
        this.closeModal();
      },
      (error) => {
        const { erros } = error.error;
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: erros,
          showConfirmButton: true,
        });
        this.isLoading = false;
        this.closeModal();
      }
    );
  }
}

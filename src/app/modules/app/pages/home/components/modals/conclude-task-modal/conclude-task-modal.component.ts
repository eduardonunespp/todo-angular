import { AfterViewInit, Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { TaskService } from '../../../../../../../../app/modules/app/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-conclude-task-modal',
  templateUrl: './conclude-task-modal.component.html',
  styleUrls: ['./conclude-task-modal.component.scss'],
})
export class ConcludeTaskModalComponent implements AfterViewInit {
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
    this.isLoading = true
    this.taskService.concludeTask(this.data.id).subscribe(
      (response) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Tarefa concluída com sucesso!',
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

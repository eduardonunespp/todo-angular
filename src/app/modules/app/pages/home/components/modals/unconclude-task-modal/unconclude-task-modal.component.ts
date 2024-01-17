import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { TaskService } from 'src/app/modules/app/services';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-unconclude-task-modal',
  templateUrl: './unconclude-task-modal.component.html',
  styleUrls: ['./unconclude-task-modal.component.scss']
})
export class UnconcludeTaskModalComponent {
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
    this.taskService.unconcludeTask(this.data.id).subscribe(
      (response) => {
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Tarefa marcada como não concluída com sucesso!',
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

import { Component, Inject, Input, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TaskService } from 'src/app/modules/app/services';
import { ImsgError, msg } from 'src/app/shared';
import { Task } from 'src/app/modules/app/types';
import Swal from 'sweetalert2';
import { EditTaskModalComponent } from '../../modals/edit-task-modal/edit-task-modal.component';

@Component({
  selector: 'td-edit-task-form',
  templateUrl: './edit-task-form.component.html',
  styleUrls: ['./edit-task-form.component.scss'],
})
export class EditTaskFormComponent {
  @Input() resetForm: boolean = false;
  @Input() onSave!: () => void;
  isLoading: boolean = false;
  listTasks: any[] = [];
  msg: ImsgError = msg;
  editTaskForm!: FormGroup;
  datePart: string = '';
  timePart: string = '';

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private dialogRef: MatDialogRef<EditTaskModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    private data: {
      assignmentListId: string;
      deadLine: string;
      description: string;
    }
  ) {
    this.initializeForm();
  }

  ngAfterViewInit(): void {
    this.datePart = this.data.deadLine.split('T')[0];

    this.timePart = this.data.deadLine.split('T')[1].split('.')[0];
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['resetForm'] && !changes['resetForm'].firstChange) {
      this.initializeForm();
    }
  }

  private initializeForm(): void {
    this.editTaskForm = this.fb.group({
      deadLine: [this.timePart, [Validators.required]],
      timeHour: [this.datePart, [Validators.required]],
      description: [this.data.description, [Validators.required]],
    });
  }

  hasDescriptionError() {
    return this.isInvalid('description', 'required');
  }

  hasDateError() {
    return this.isInvalid('deadLine', 'required');
  }

  hasTimeHourError() {
    return this.isInvalid('timeHour', 'required');
  }

  hasListError() {
    return this.isInvalid('assignmentListId', 'required');
  }

  isInvalid(inputName: string, validatorName: string) {
    const formControl: any = this.editTaskForm.get(inputName);

    if (formControl.errors !== null) {
      return (
        formControl.errors[validatorName] &&
        this.editTaskForm.get(inputName)?.touched
      );
    }
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  registerTask() {
    this.isLoading = true;
    if (this.editTaskForm.valid) {
      const dateValue: string = this.editTaskForm.get('deadLine')?.value;
      const timeValue: string = this.editTaskForm.get('timeHour')?.value;

      const combinedDateTime: Date = new Date(
        `${dateValue}T${timeValue}:00.000Z`
      );

      combinedDateTime.setHours(combinedDateTime.getHours() + 3);

      const formattedDatetime: string = combinedDateTime.toISOString();

      this.editTaskForm.patchValue({
        deadLine: formattedDatetime,
      });

      let payload: Task = this.editTaskForm.value;

      this.taskService.editTask(this.data.assignmentListId, payload).subscribe(
        (response) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Tarefa cadastrada com sucesso!',
            showConfirmButton: false,
            timer: 1800,
          });
          this.isLoading = false;
          this.closeModal();
        },
        (errors) => {
          if (errors.status === 401 || errors.status === 403) {
            this.closeModal();
          } else {
            const { message } = errors.error;
            Swal.fire({
              position: 'center',
              icon: 'error',
              title: message,
              showConfirmButton: true,
            });
            this.closeModal();
          }
        }
      );
    }
  }
}

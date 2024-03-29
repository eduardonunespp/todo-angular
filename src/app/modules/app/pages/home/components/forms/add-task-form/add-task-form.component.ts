import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  Output,
  SimpleChanges,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TaskListService, TaskService } from 'src/app/modules/app/services';
import { ImsgError, msg } from 'src/app/shared';
import { AddTaskModalComponent } from '../../modals/add-task-modal/add-task-modal.component';
import { Task } from 'src/app/modules/app/types';
import Swal from 'sweetalert2';

@Component({
  selector: 'td-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss'],
})
export class AddTaskFormComponent implements AfterViewInit {
  @Output() isValidForm: EventEmitter<boolean> = new EventEmitter();
  @Input() resetForm: boolean = false;
  @Input() onSave!: () => void;
  isLoading: boolean = false;
  listTasks: any[] = [];

  msg: ImsgError = msg;
  addTaskForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private taskListService: TaskListService,
    private dialogRef: MatDialogRef<AddTaskModalComponent>
  ) {
    this.initializeForm();
  }

  ngAfterViewInit(): void {
    this.taskListService.onTaskListUpdated().subscribe(() => {
      this.loadDataList();
    });

    this.loadDataList();
  }

  loadDataList() {
    this.taskListService.getTaskList().subscribe((response) => {
      const { items } = response;
      this.listTasks = items;
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['resetForm'] && !changes['resetForm'].firstChange) {
      this.initializeForm();
    }
  }

  private initializeForm(): void {
    this.addTaskForm = this.fb.group({
      deadLine: ['', [Validators.required]],
      timeHour: ['', [Validators.required]],
      assignmentListId: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });

    this.addTaskForm.valueChanges.subscribe(() => {
      this.isValidForm.emit(this.addTaskForm.valid);
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
    const formControl: any = this.addTaskForm.get(inputName);

    if (formControl.errors !== null) {
      return (
        formControl.errors[validatorName] &&
        this.addTaskForm.get(inputName)?.touched
      );
    }
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  registerTask() {
    this.isLoading = true;
    if (this.addTaskForm.valid) {
      const dateValue: string = this.addTaskForm.get('deadLine')?.value;
      const timeValue: string = this.addTaskForm.get('timeHour')?.value;

      const combinedDateTime: Date = new Date(`${dateValue}T${timeValue}:00.000Z`);
    
      combinedDateTime.setHours(combinedDateTime.getHours() + 3);
  
      const formattedDatetime: string = combinedDateTime.toISOString();
  
      this.addTaskForm.patchValue({
        deadLine: formattedDatetime,
      });

      let payload: Task = this.addTaskForm.value;

      this.taskService.addTask({ ...payload}).subscribe(
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

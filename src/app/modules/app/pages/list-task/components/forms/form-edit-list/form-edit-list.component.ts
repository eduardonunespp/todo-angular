import { Component, Inject, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { TaskListService } from '../../../../../services/task-list.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EditListModalComponent } from '../../modals/edit-list-modal/edit-list-modal.component';
import { ImsgError, msg } from 'src/app/shared';
import { ITaskList } from 'src/app/modules/app/types';

@Component({
  selector: 'td-form-edit-list',
  templateUrl: './form-edit-list.component.html',
  styleUrls: ['./form-edit-list.component.scss'],
})
export class FormEditListComponent implements OnInit {
  @Input() resetForm: boolean = false;
  @Input() onSave!: () => void;
  @Input() id!: string;
  @Input() name!: string;
  isLoading: boolean = false;

  msg: ImsgError = msg;
  editListForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private taskListService: TaskListService,
    private dialogRef: MatDialogRef<EditListModalComponent>
  ) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.editListForm = this.fb.group({
      name: [this.name, [Validators.required]],
    });
  }

  hasNameError() {
    return this.isInvalid('name', 'required');
  }

  isInvalid(inputName: string, validatorName: string) {
    const formControl: any = this.editListForm.get(inputName);
    if (formControl.errors !== null) {
      return (
        formControl.errors[validatorName] &&
        this.editListForm.get(inputName)?.touched
      );
    }
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  editTaskList() {
    this.isLoading = true;
    if (this.editListForm.valid) {
      let payload: ITaskList = this.editListForm.value;
      this.taskListService.editTaskList(this.id, payload).subscribe(
        (response) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Lista editada com sucesso!',
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
    } else {
      this.editListForm.markAllAsTouched();
    }
  }
}

import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { msg } from 'src/app/shared/utils';
import { ImsgError } from 'src/app/shared/domain-types';
import { TaskListService } from 'src/app/modules/app/services/task-list.service';
import { ITaskList } from 'src/app/modules/app/types';
import Swal from 'sweetalert2';
import { MatDialogRef } from '@angular/material/dialog';
import { AddListModalComponent } from '../../modals/add-list-modal/add-list-modal.component';

@Component({
  selector: 'td-add-form-list',
  templateUrl: './form-add-list.component.html',
  styleUrls: ['./form-add-list.component.scss'],
})
export class FormAddListComponent implements OnChanges {
  @Output() isValidForm: EventEmitter<boolean> = new EventEmitter();
  @Input() resetForm: boolean = false;
  isLoading: boolean = false;
  @Input() onSave!: () => void;

  msg: ImsgError = msg;
  addListForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private taskListService: TaskListService,
    private dialogRef: MatDialogRef<AddListModalComponent>
  ) {
    this.initializeForm();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['resetForm'] && !changes['resetForm'].firstChange) {
      this.initializeForm();
    }
  }

  private initializeForm(): void {
    this.addListForm = this.fb.group({
      name: ['', [Validators.required]],
      // description: ['', [Validators.required]]
    });

    this.addListForm.valueChanges.subscribe(() => {
      this.isValidForm.emit(this.addListForm.valid);
    });
  }

  hasNameError() {
    return this.isInvalid('name', 'required');
  }

  isInvalid(inputName: string, validatorName: string) {
    const formControl: any = this.addListForm.get(inputName);
    if (formControl.errors !== null) {
      return (
        formControl.errors[validatorName] &&
        this.addListForm.get(inputName)?.touched
      );
    }
  }

  closeModal(): void {
    this.dialogRef.close();
  }

  registerTaskList() {
    this.isLoading = true;
    if (this.addListForm.valid) {
      let payload: ITaskList = this.addListForm.value;
      this.taskListService.addTaskList(payload).subscribe(
        (response) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Lista cadastrada com sucesso!',
            showConfirmButton: false,
            timer: 1800,
          });
          this.isLoading = false;
          this.closeModal();
        },
        (error) => {
          const { erros } = error.error
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
    } else {
      this.addListForm.markAllAsTouched();
    }
  }
}

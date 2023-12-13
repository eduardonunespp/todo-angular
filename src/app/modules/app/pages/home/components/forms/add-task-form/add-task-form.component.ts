import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TaskListService } from 'src/app/modules/app/services/task-list.service';
import { ImsgError, msg } from 'src/app/shared';
import { AddListModalComponent } from '../../../../list-task/components/modals/add-list-modal/add-list-modal.component';
import { AddTaskModalComponent } from '../../modals/add-task-modal/add-task-modal.component';

@Component({
  selector: 'td-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.scss']
})
export class AddTaskFormComponent {
  @Output() isValidForm: EventEmitter<boolean> = new EventEmitter();
  @Input() resetForm: boolean = false;
  isLoading: boolean = false;
  @Input() onSave!: () => void;

  msg: ImsgError = msg;
  addListForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private taskListService: TaskListService,
    private dialogRef: MatDialogRef<AddTaskModalComponent>
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
    
  }
}

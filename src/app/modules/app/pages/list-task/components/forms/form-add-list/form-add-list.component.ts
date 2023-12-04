import { Component, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { msg } from 'src/app/shared/utils'
import { ImsgError } from 'src/app/shared/domain-types'

@Component({
  selector: 'td-add-form-list',
  templateUrl: './form-add-list.component.html',
  styleUrls: ['./form-add-list.component.scss'],
})
export class FormAddListComponent implements OnChanges {
  @Output() isValidForm: EventEmitter<boolean> = new EventEmitter();
  @Input() resetForm: boolean = false;
  msg: ImsgError = msg
  addListForm!: FormGroup;

  constructor(private fb: FormBuilder) {
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
}
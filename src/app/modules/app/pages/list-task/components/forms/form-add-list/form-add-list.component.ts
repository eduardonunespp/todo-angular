import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { msg } from '../../../../../../../shared/utils';
import { ImsgError } from '../../../../../../../shared/domain-types';

@Component({
  selector: 'td-add-form-list',
  templateUrl: './form-add-list.component.html',
  styleUrls: ['./form-add-list.component.scss'],
})
export class FormAddListComponent {
  msg: ImsgError = msg;

  constructor(private fb: FormBuilder) {}

  hasNameError() {
    return this.isInvalid('name', 'required');
  }

  addListForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    // description: ['', [Validators.required]]
  });

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

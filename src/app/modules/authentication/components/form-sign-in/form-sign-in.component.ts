import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ImsgError } from '../../types';
import { msg } from '../../utils';

@Component({
  selector: 'td-form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrls: ['./form-sign-in.component.scss'],
})
export class FormSignInComponent {
  @Input() title: string = '';
  msg: ImsgError = msg;

  constructor(private fb: FormBuilder) {}

  passwordPattern = /^.{8,}$/;

  hasEmailError() {
    return (
      this.isInvalid('email', 'required') || this.isInvalid('email', 'email')
    );
  }

  hasMsgEmailError() {
    if (this.isInvalid('email', 'required')) {
      return msg.required;
    } else {
      return msg.email;
    }
  }

  hasPasswordError() {
    return (
      this.isInvalid('password', 'required') ||
      this.isInvalid('password', 'passwordLength')
    );
  }

  hasMsgPasswordError() {
    if (this.isInvalid('email', 'required')) {
      return msg.required;
    } else {
      return msg.passwordMinLength;
    }
  }

  passwordLengthValidator(minLength: number): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value || control.value.length < minLength) {
        return { passwordLength: true };
      }
      return null;
    };
  }

  signInForm: FormGroup = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.pattern(this.passwordPattern),
        this.passwordLengthValidator(8),
      ],
    ],
  });

  isInvalid(inputName: string, validatorName: string) {
    const formControl: any = this.signInForm.get(inputName);
    if (formControl.errors !== null) {
      return (
        formControl.errors[validatorName] &&
        this.signInForm.get(inputName)?.touched
      );
    }
  }
}

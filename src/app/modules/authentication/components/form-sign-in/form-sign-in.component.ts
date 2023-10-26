import { Component, Input } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Cache } from '../../../../core';
import { AuthService } from '../../services';
import { ImsgError, IloginUsers } from '../../types';
import { msg } from '../../utils';

@Component({
  selector: 'td-form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrls: ['./form-sign-in.component.scss'],
})
export class FormSignInComponent {
  @Input() title: string = '';
  msg: ImsgError = msg;

  constructor(private fb: FormBuilder, private authService: AuthService) {}

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
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  loginUser() {
    if (this.signInForm.valid) {
      let payload: IloginUsers = this.signInForm.value;
      this.authService.loginUser(payload).subscribe(
        (response: any) => {
          alert('usuário logado com sucesso');
          const { accessToken } = response;
          Cache.setSession({ key: 'accessToken', value: accessToken });
        },
        (error) => {
          const { erros } = error.error;
          alert(erros);
        }
      );
    } else {
      this.signInForm.markAllAsTouched();
    }
  }

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

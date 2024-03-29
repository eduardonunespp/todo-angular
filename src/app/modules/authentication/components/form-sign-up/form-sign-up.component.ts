import { Component, Input } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services';
import { msg } from '../../utils';
import { ImsgError, IregisterUsers } from '../../types';
import Swal from 'sweetalert2';

@Component({
  selector: 'td-form-sign-up',
  templateUrl: './form-sign-up.component.html',
  styleUrls: ['./form-sign-up.component.scss'],
})
export class FormSignUpComponent {
  @Input() title: string = '';
  msg: ImsgError = msg;
  error: boolean = false;
  isLoading: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

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

  hasPasswordMatchError() {
    return (
      this.isInvalid('passwordConfirm', 'required') ||
      this.isInvalid('passwordConfirm', 'match')
    );
  }

  hasMsgPasswordMatchError() {
    if (this.isInvalid('passwordConfirm', 'required')) {
      return msg.required;
    } else {
      return msg.passwordDoNotMatch;
    }
  }

  hasPasswordErrorMsg() {
    if (
      this.isInvalid('password', 'required') &&
      !this.isInvalid('password', 'passwordLength')
    ) {
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

  passwordsMatch(control: AbstractControl) {
    const password = control.get('password')?.value;
    const passwordConfirm = control.get('passwordConfirm')?.value;

    if (password !== passwordConfirm) {
      control.get('passwordConfirm')?.setErrors({ match: true });
      return { match: true };
    } else {
      control.get('passwordConfirm')?.setErrors(null);
      return null;
    }
  }

  signUpForm: FormGroup = this.fb.group(
    {
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(this.passwordPattern),
          this.passwordLengthValidator(8),
        ],
      ],
      passwordConfirm: [
        '',
        [Validators.required, Validators.pattern(this.passwordPattern)],
      ],
    },
    { validators: this.passwordsMatch }
  );

  registerUser() {
    if (this.signUpForm.valid) {
      this.isLoading = true;

      let payload: IregisterUsers = {
        ...this.signUpForm.value,
        confirmPassword: this.signUpForm.value.passwordConfirm,
      };

      this.authService.registerUser(payload).subscribe(
        (response) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Usuário cadastrado com sucesso',
            showConfirmButton: false,
            timer: 1500,
          });
          this.isLoading = false;
          this.router.navigateByUrl('');
        },
        (errors) => {
          const { message } = errors.error;
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: message,
            showConfirmButton: true,
          });
          this.isLoading = false;
        }
      );
    } else {
      this.signUpForm.markAllAsTouched();
    }
  }

  isInvalid(inputName: string, validatorName: string) {
    const formControl: any = this.signUpForm.get(inputName);
    if (formControl.errors !== null) {
      return (
        formControl.errors[validatorName] &&
        this.signUpForm.get(inputName)?.touched
      );
    }
  }
}

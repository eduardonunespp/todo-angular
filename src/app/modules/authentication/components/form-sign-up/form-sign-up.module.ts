import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSignUpComponent } from './form-sign-up.component';
import { ButtonComponentModule, InputComponentModule } from '../';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormSignUpComponent],
  imports: [
    CommonModule,
    ButtonComponentModule,
    InputComponentModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [FormSignUpComponent],
})
export class FormSignUpModule {}

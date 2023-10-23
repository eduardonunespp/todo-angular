import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSignUpComponent } from './form-sign-up.component';
import { ButtonComponentModule, InputComponentModule } from '../';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input'

@NgModule({
  declarations: [FormSignUpComponent],
  imports: [
    CommonModule,
    ButtonComponentModule,
    InputComponentModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,


  ],
  exports: [FormSignUpComponent],
})
export class FormSignUpModule {}

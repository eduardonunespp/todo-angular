import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSignInComponent } from './form-sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponentModule, ButtonComponentModule } from '../';

@NgModule({
  declarations: [FormSignInComponent],
  imports: [
    CommonModule,
    InputComponentModule,
    ButtonComponentModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [FormSignInComponent],
})
export class FormSignInModule {}

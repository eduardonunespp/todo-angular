import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSignUpComponent } from './form-sign-up.component';
import { ButtonComponentModule, InputComponentModule } from '../'



@NgModule({
  declarations: [
    FormSignUpComponent
  ],
  imports: [
    CommonModule, ButtonComponentModule, InputComponentModule
  ],
  exports: [FormSignUpComponent]
})
export class FormSignUpModule { }

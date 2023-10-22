import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSignInComponent } from './form-sign-in.component';
import { InputComponentModule, ButtonComponentModule } from '../';

@NgModule({
  declarations: [FormSignInComponent],
  imports: [CommonModule, InputComponentModule, ButtonComponentModule],
  exports: [FormSignInComponent],
})
export class FormSignInModule {}

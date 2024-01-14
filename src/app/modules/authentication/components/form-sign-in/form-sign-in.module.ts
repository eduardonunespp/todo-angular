import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSignInComponent } from './form-sign-in.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponentModule, ButtonComponentModule } from '../';
import { InputPasswordModule } from '../input-password/input-password.module';
import { NgIconsModule } from '@ng-icons/core';
import { matEmail } from '@ng-icons/material-icons/baseline'

@NgModule({
  declarations: [FormSignInComponent],
  imports: [
    CommonModule,
    InputComponentModule,
    InputPasswordModule,
    ButtonComponentModule,
    FormsModule,
    ReactiveFormsModule,
    NgIconsModule.withIcons({ matEmail })
  ],
  exports: [FormSignInComponent],
})
export class FormSignInModule {}

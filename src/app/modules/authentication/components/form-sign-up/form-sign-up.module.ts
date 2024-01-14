import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormSignUpComponent } from './form-sign-up.component';
import { ButtonComponentModule, InputComponentModule } from '../';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgIconsModule } from '@ng-icons/core';
import { heroUserSolid } from '@ng-icons/heroicons/solid'
import { matEmail } from '@ng-icons/material-icons/baseline'
import { InputPasswordModule } from '../input-password/input-password.module';


@NgModule({
  declarations: [FormSignUpComponent],
  imports: [
    CommonModule,
    ButtonComponentModule,
    InputComponentModule,
    ReactiveFormsModule,
    FormsModule,
    InputPasswordModule,
    NgIconsModule.withIcons({ heroUserSolid, matEmail })
  ],
  exports: [FormSignUpComponent],
})
export class FormSignUpModule {}

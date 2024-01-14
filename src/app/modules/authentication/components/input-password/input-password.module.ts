import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputPasswordComponent } from './input-password.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgIconsModule } from '@ng-icons/core';
import { ionEye, ionEyeOff, ionLockClosed } from '@ng-icons/ionicons';

@NgModule({
  declarations: [InputPasswordComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    NgIconsModule.withIcons({ ionLockClosed, ionEye, ionEyeOff }),
  ],
  exports: [
    InputPasswordComponent
  ]
})
export class InputPasswordModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input-component.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatFormFieldModule],
  exports: [InputComponent],
})
export class InputComponentModule {}

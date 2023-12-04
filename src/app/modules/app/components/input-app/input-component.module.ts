import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputAppComponent } from './input-app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [InputAppComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MatFormFieldModule],
  exports: [InputAppComponent],
})
export class InputAppModule {}

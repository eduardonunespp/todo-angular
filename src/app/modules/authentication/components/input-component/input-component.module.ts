import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './input-component.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

@NgModule({
  declarations: [InputComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule ],
  exports: [InputComponent],
})
export class InputComponentModule {}

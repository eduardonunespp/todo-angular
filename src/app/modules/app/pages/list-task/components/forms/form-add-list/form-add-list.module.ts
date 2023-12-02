import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAddListComponent } from './form-add-list.component';
import { InputAppComponentModule } from '../../../../../components';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [FormAddListComponent],
  imports: [
    CommonModule,
    InputAppComponentModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    FormAddListComponent
  ]
})
export class FormAddListModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterTaskFormComponent } from './filter-task-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    FilterTaskFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatSelectModule,
    MatFormFieldModule
  ],
  exports: [
    FilterTaskFormComponent
  ]
})
export class FilterTaskFormModule { }

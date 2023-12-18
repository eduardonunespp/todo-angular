import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter.component';
import { ArrowIconModule } from 'src/app/shared';
import { FilterTaskFormModule } from '../forms/filter-task-form/filter-task-form.module';

@NgModule({
  declarations: [
    FilterComponent
  ],
  imports: [
    CommonModule,
    ArrowIconModule,
    FilterTaskFormModule
  
  ],
  exports: [
    FilterComponent
  ]
})
export class FilterModule { }

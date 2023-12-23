import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskFormComponent } from './add-task-form.component';
import { InputAppModule, TextAreaModule } from 'src/app/modules/app/components';
import { SipnnerModule } from 'src/app/shared/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [AddTaskFormComponent],
  imports: [
    CommonModule,
    InputAppModule,
    TextAreaModule,
    SipnnerModule,
    FormsModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatSelectModule,
    MatFormFieldModule,
  ],
  exports: [AddTaskFormComponent],
})
export class AddTaskFormModule {}

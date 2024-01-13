import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTaskFormComponent } from './edit-task-form.component';
import { SipnnerModule } from 'src/app/shared/components';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextAreaModule } from '../../../../../components/text-area/text-area.module'
import { InputAppModule } from '../../../../../components/input-app/input-component.module'

@NgModule({
  declarations: [EditTaskFormComponent],
  imports: [
    CommonModule,
    SipnnerModule,
    MatGridListModule,
    MatFormFieldModule,
    InputAppModule,
    TextAreaModule,
    FormsModule,

    ReactiveFormsModule,
  ],
  exports: [EditTaskFormComponent],
})
export class EditTaskFormModule {}

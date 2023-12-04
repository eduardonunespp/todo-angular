import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormAddListComponent } from './form-add-list.component';
import { InputAppModule, TextAreaModule } from '../../../../../components';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SipnnerModule } from 'src/app/shared/components';

@NgModule({
  declarations: [FormAddListComponent],
  imports: [
    CommonModule,
    InputAppModule,
    TextAreaModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule,
    SipnnerModule
  ],
  exports: [
    FormAddListComponent
  ]
})
export class FormAddListModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormEditListComponent } from './form-edit-list.component';
import { InputAppModule } from '../../../../../components/input-app/input-component.module';
import { SipnnerModule } from 'src/app/shared/components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextAreaModule } from 'src/app/modules/app/components';

@NgModule({
  declarations: [FormEditListComponent],
  imports: [
    CommonModule,
    InputAppModule,
    FormsModule,
    ReactiveFormsModule,
    TextAreaModule,
    SipnnerModule,
  ],
  exports: [FormEditListComponent],
})
export class FormEditListModule {}

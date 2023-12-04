import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddListModalComponent } from './add-list-modal.component';
import { AddIconModule } from 'src/app/shared';
import { FormAddListModule } from '../../forms/form-add-list/form-add-list.module';

@NgModule({
  declarations: [
    AddListModalComponent
  ],
  imports: [
    CommonModule,
    AddIconModule,
    FormAddListModule
  ],
  exports: [
    AddListModalComponent
  ]
})
export class AddListModalModule { }

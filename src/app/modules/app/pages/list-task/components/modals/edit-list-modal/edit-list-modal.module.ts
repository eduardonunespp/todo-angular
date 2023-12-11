import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditListModalComponent } from './edit-list-modal.component';
import { EditIconModule } from 'src/app/shared'
import { FormEditListModule } from '../../forms/form-edit-list/form-edit-list.module';

@NgModule({
  declarations: [
    EditListModalComponent
  ],
  imports: [
    CommonModule,
    EditIconModule,
    FormEditListModule
    
  ]
})
export class EditListModalModule { }

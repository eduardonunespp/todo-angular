import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddIconModule } from '../../../../shared/Icons'
import { GenericModalModule } from '../generic-modal/generic-modal.module';

@NgModule({
  declarations: [
    ModalComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    AddIconModule,
    GenericModalModule
  ],
  exports: [
    ModalComponent
  ]
})
export class ModalModule { }

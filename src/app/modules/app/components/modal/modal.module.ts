import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AddIconModule } from '../../../../shared/Icons'

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    AddIconModule
  ],
  exports: [
    ModalComponent
  ]
})
export class ModalModule { }

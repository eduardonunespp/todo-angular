import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GenericModalComponent } from './generic-modal.component';

@NgModule({
  declarations: [
    GenericModalComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GenericModalComponent
  ]
})
export class GenericModalModule { }

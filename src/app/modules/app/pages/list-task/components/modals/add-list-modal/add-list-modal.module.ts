import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddListModalComponent } from './add-list-modal.component';
import { AddIconModule } from 'src/app/shared';

@NgModule({
  declarations: [
    AddListModalComponent
  ],
  imports: [
    CommonModule,
    AddIconModule
  ],
  exports: [
    AddListModalComponent
  ]
})
export class AddListModalModule { }

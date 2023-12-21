import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteTaskModalComponent } from './delete-task-modal.component';
import { SipnnerModule } from 'src/app/shared/components';
import { DeleteIconModule } from 'src/app/shared';

@NgModule({
  declarations: [
    DeleteTaskModalComponent
  ],
  imports: [
    CommonModule,
    SipnnerModule,
    DeleteIconModule
  ],
  exports: [
    DeleteTaskModalComponent
  ]
})
export class DeleteTaskModalModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogOutModalComponent } from './log-out-modal.component';
import { LogOutIconModule } from 'src/app/shared';

@NgModule({
  declarations: [
    LogOutModalComponent
  ],
  imports: [
    CommonModule,
    LogOutIconModule
  ],
  exports: [
    LogOutIconModule
  ]
})
export class LogOutModalModule { }

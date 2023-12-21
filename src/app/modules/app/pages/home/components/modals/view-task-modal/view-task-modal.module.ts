import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewTaskModalComponent } from './view-task-modal.component';
import { SipnnerModule } from 'src/app/shared/components';
import { ionEye } from '@ng-icons/ionicons'
import { NgIconsModule } from '@ng-icons/core';

@NgModule({
  declarations: [ViewTaskModalComponent],
  imports: [CommonModule, SipnnerModule, NgIconsModule.withIcons({ ionEye })],
  exports: [ViewTaskModalComponent],
})
export class ViewTaskModalModule {}

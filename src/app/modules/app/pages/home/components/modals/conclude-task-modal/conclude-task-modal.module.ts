import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConcludeTaskModalComponent } from './conclude-task-modal.component';
import { SipnnerModule } from 'src/app/shared/components';
import { CheckIconModule } from 'src/app/shared';
import { NgIconsModule } from '@ng-icons/core';
import { heroCheckCircleSolid } from '@ng-icons/heroicons/solid';

@NgModule({
  declarations: [
    ConcludeTaskModalComponent
  ],
  imports: [
    CommonModule,
    SipnnerModule,
    CheckIconModule,
    NgIconsModule.withIcons({ heroCheckCircleSolid }),
  ],
  exports: [
    ConcludeTaskModalComponent
  ]
})
export class ConcludeTaskModalModule { }

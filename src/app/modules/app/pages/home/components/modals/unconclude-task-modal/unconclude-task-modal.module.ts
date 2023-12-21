import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnconcludeTaskModalComponent } from './unconclude-task-modal.component';
import { SipnnerModule } from 'src/app/shared/components';
import { ionCloseCircle } from '@ng-icons/ionicons'
import { NgIconsModule } from '@ng-icons/core';

@NgModule({
  declarations: [
    UnconcludeTaskModalComponent
  ],
  imports: [
    CommonModule,
    SipnnerModule,
    NgIconsModule.withIcons({ ionCloseCircle }),
  ],
  exports: [
    UnconcludeTaskModalComponent
  ]
})
export class UnconcludeTaskModalModule { }

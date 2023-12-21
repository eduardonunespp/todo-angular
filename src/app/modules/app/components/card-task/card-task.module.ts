import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CardTaskComponent } from './card-task.component';
import { AddIconModule, CheckIconModule, DeleteIconModule, EditIconModule, ListIconModule, TimeIconModule } from 'src/app/shared';
import { NgIconsModule } from '@ng-icons/core';
import { heroCheckCircleSolid } from '@ng-icons/heroicons/solid';
import { ConcludeTaskModalModule } from '../../pages/home/components/modals/conclude-task-modal/conclude-task-modal.module';
import { DeleteTaskModalModule } from '../../pages/home/components/modals/delete-task-modal/delete-task-modal.module';

@NgModule({
  declarations: [
    CardTaskComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    ListIconModule,
    TimeIconModule,
    AddIconModule,
    EditIconModule,
    CheckIconModule,
    DeleteIconModule,
    ConcludeTaskModalModule,
    DeleteTaskModalModule,
    NgIconsModule.withIcons({ heroCheckCircleSolid }),
    
  ],
  exports: [
    CardTaskComponent
  ]
})
export class CardTaskModule { }

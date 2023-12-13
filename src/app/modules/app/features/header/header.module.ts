import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from './header.component';
import { GenericModalModule } from '../../components/generic-modal/generic-modal.module';
import { AddListModalModule } from '../../pages/list-task/components/modals/add-list-modal/add-list-modal.module';
import { MatDialogModule } from '@angular/material/dialog';
import { AddTaskModalModule } from '../../pages/home/components/modals/add-task-modal/add-task-modal.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    AddListModalModule,
    AddTaskModalModule,
    GenericModalModule,
    MatDialogModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }

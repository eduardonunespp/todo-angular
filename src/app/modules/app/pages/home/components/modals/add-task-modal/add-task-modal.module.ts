import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddTaskModalComponent } from './add-task-modal.component';
import { AddIconModule } from 'src/app/shared';
import { AddTaskFormComponent } from '../../forms/add-task-form/add-task-form.component';
import { AddTaskFormModule } from '../../forms/add-task-form/add-task-form.module';



@NgModule({
  declarations: [
    AddTaskModalComponent
  ],
  imports: [
    CommonModule,
    AddIconModule,
    AddTaskFormModule
  ],
  exports: [
    AddTaskModalComponent
  ]
})
export class AddTaskModalModule { }

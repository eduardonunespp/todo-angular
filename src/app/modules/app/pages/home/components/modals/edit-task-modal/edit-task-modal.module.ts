import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTaskModalComponent } from './edit-task-modal.component';
import { EditIconModule } from 'src/app/shared';
import { EditTaskFormModule } from '../../forms/edit-task-form/edit-task-form.module';

@NgModule({
  declarations: [EditTaskModalComponent],
  imports: [CommonModule, EditIconModule, EditTaskFormModule],
  exports: [EditTaskModalComponent]
})
export class EditTaskModalModule {}

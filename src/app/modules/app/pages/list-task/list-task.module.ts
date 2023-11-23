import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTaskComponent } from './list-task.component';
import { ListRoutingModule } from './list-task-routing.module';
import { HeaderModule, SideBarModule } from '../../features';
import { MatTableModule } from '@angular/material/table';
import { EditIconModule, DeleteIconModule } from '../../../../shared/Icons'

@NgModule({
  declarations: [ListTaskComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    SideBarModule,
    HeaderModule,
    MatTableModule,
    EditIconModule,
    DeleteIconModule
  ],
})
export class ListTaskModule {}

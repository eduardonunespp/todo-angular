import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTaskComponent } from './list-task.component';
import { ListRoutingModule } from './list-task-routing.module';
import { HeaderModule, SideBarModule } from '../../features';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [ListTaskComponent],
  imports: [
    CommonModule,
    ListRoutingModule,
    SideBarModule,
    HeaderModule,
    MatTableModule,
  ],
})
export class ListTaskModule {}

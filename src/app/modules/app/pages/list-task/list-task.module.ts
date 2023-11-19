import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListTaskComponent } from './list-task.component';
import { ListRoutingModule } from './list-task-routing.module';
import { SideBarModule } from '../../features';

@NgModule({
  declarations: [
    ListTaskComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    SideBarModule
  ]
})
export class ListTaskModule { }

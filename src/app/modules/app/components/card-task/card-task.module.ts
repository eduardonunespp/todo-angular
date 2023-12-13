import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CardTaskComponent } from './card-task.component';
import { AddIconModule, CheckIconModule, DeleteIconModule, EditIconModule, ListIconModule, TimeIconModule } from 'src/app/shared';

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
    
  ],
  exports: [
    CardTaskComponent
  ]
})
export class CardTaskModule { }

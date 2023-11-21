import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CardTaskComponent } from './card-task.component';



@NgModule({
  declarations: [
    CardTaskComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  exports: [
    CardTaskComponent
  ]
})
export class CardTaskModule { }

import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NavBarComponent } from './nav-bar.component';
import { ButtonSideModule } from '../button-side/button-side.module';
import { ButtonTaskSideModule } from '../button-side-task/button-side.module';



@NgModule({
  declarations: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    ButtonSideModule,
    ButtonTaskSideModule,
    NgOptimizedImage
  ],
  exports: [
    NavBarComponent
  ]
})
export class NavBarModule { }

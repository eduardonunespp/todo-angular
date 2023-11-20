import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from './header.component';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }

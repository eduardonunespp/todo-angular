import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ModalModule } from '../../components'



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    ModalModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }

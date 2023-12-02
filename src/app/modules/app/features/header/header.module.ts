import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ModalModule } from '../../components'
import { GenericModalModule } from '../../components/generic-modal/generic-modal.module';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    ModalModule,
    GenericModalModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }

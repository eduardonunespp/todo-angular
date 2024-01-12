import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonToTopComponent } from './button-to-top.component';
import { NgIconsModule } from '@ng-icons/core';
import { ionArrowUp } from '@ng-icons/ionicons';

@NgModule({
  declarations: [
    ButtonToTopComponent
  ],
  imports: [
    CommonModule,
    NgIconsModule.withIcons({ ionArrowUp }),
  ],
  exports: [
    ButtonToTopComponent
  ]
})
export class ButtonToTopModule { }

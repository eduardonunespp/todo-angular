import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ButtonSideComponent } from './button-side.component';
//  import { heroHomeSolid } from '@ng-icons/heroicons/solid';
//  import { NgIconsModule } from '@ng-icons/core';

@NgModule({
  declarations: [
    ButtonSideComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  exports: [
    ButtonSideComponent
  ]
})
export class ButtonSideModule { }

import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ButtonTaskSideComponent} from './button-side.component';
//  import { heroHomeSolid } from '@ng-icons/heroicons/solid';
//  import { NgIconsModule } from '@ng-icons/core';

@NgModule({
  declarations: [
    ButtonTaskSideComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage
  ],
  exports: [
    ButtonTaskSideComponent
  ]
})
export class ButtonTaskSideModule { }

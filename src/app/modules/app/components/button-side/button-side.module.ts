import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonSideComponent } from './button-side.component';
// import { heroHomeSolid } from '@ng-icons/heroicons/solid';
// import { NgIconsModule } from '@ng-icons/core';

@NgModule({
  declarations: [
    ButtonSideComponent
  ],
  imports: [
    CommonModule,
    // NgIconsModule.withIcons({ heroHomeSolid })
  ],
  exports: [
    ButtonSideComponent
  ]
})
export class ButtonSideModule { }

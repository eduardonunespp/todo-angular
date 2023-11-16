import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SideBarComponent } from './side-bar.component';
import { ButtonSideModule } from '../../components';

@NgModule({
  declarations: [SideBarComponent],
  imports: [CommonModule, NgOptimizedImage, ButtonSideModule],
  exports: [SideBarComponent],
})
export class SideBarModule {}

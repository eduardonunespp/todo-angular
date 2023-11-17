import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SideBarComponent } from './side-bar.component';
import { ButtonSideModule } from '../../components';
import { ButtonTaskSideComponent } from '../../components/button-side-task/button-side.component';
import { ButtonTaskSideModule } from '../../components/button-side-task/button-side.module';

@NgModule({
  declarations: [SideBarComponent],
  imports: [CommonModule, NgOptimizedImage, ButtonSideModule, ButtonTaskSideModule],
  exports: [SideBarComponent],
})
export class SideBarModule {}

import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SideBarComponent } from './side-bar.component';

@NgModule({
  declarations: [SideBarComponent],
  imports: [CommonModule, NgOptimizedImage],
  exports: [SideBarComponent],
})
export class SideBarModule {}

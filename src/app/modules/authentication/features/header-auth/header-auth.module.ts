import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HeaderAuthComponent } from './header-auth.component';

@NgModule({
  declarations: [HeaderAuthComponent],
  imports: [CommonModule, NgOptimizedImage],
  exports: [HeaderAuthComponent],
})
export class HeaderAuthModule {}

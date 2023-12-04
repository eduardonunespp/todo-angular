import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button.component';
import { SipnnerModule } from 'src/app/shared/components';

@NgModule({
  declarations: [ButtonComponent],
  imports: [CommonModule, SipnnerModule],
  exports: [ButtonComponent],
})
export class ButtonComponentModule {}

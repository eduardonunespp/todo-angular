import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerAuthComponent } from './container-auth.component';
import { InputComponentModule } from '../../components';

@NgModule({
  declarations: [ContainerAuthComponent],
  imports: [CommonModule, InputComponentModule],
  exports: [ContainerAuthComponent],
})
export class ContainerAuthModule {}

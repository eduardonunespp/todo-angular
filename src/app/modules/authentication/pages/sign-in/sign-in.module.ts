import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { SignInRoutingModule } from './sign-in-routing.module';
import { ContainerAuthModule } from '../../features';

@NgModule({
  declarations: [SignInComponent],
  imports: [CommonModule, SignInRoutingModule, ContainerAuthModule],
})
export class SignInModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { SignInRoutingModule } from './sign-in-routing.module';
import { ContainerAuthModule, HeaderAuthModule } from '../../features';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    SignInRoutingModule,
    ContainerAuthModule,
    HeaderAuthModule,
  ],
})
export class SignInModule {}

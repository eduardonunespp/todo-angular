import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { SignInRoutingModule } from './sign-in-routing.module';
import { ContainerAuthModule, HeaderAuthModule } from '../../features';
import { FormSignInModule } from '../../components';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    SignInRoutingModule,
    ContainerAuthModule,
    HeaderAuthModule,
    FormSignInModule,
  ],
})
export class SignInModule {}

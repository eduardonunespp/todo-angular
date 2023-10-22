import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { ContainerAuthModule, HeaderAuthModule } from '../../features';
import { FormSignUpModule } from '../../components';

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    ContainerAuthModule,
    HeaderAuthModule,
    FormSignUpModule,
  ],
})
export class SignUpModule {}

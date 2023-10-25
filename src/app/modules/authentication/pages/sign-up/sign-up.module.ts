import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpComponent } from './sign-up.component';
import { SignUpRoutingModule } from './sign-up-routing.module';
import { AuthService } from '../../services';
import { ContainerAuthModule, HeaderAuthModule } from '../../features';
import { FormSignUpModule } from '../../components';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    SignUpRoutingModule,
    ContainerAuthModule,
    HeaderAuthModule,
    FormSignUpModule,
    HttpClientModule,
  ],
})
export class SignUpModule {}

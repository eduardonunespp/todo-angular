import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { SignInRoutingModule } from './sign-in-routing.module';
import { ContainerAuthModule, HeaderAuthModule } from '../../features';
import { FormSignInModule } from '../../components';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [SignInComponent],
  imports: [
    CommonModule,
    SignInRoutingModule,
    ContainerAuthModule,
    HeaderAuthModule,
    FormSignInModule,
    MatDialogModule
  ],
})
export class SignInModule {}

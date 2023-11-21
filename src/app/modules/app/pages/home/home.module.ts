import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module'
import { HeaderModule, SideBarModule } from '../../features'
import { CardTaskModule } from '../../components';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SideBarModule,
    HeaderModule,
    CardTaskModule
  ]
})
export class HomeModule { }

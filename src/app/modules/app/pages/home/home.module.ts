import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module'
import { HeaderModule, SideBarModule } from '../../features'
import { CardTaskModule } from '../../components';
import { FilterModule } from './components/filter/filter.module';
import { NavBarModule } from '../../components/nav-bar/nav-bar.module';

@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SideBarModule,
    NavBarModule,
    HeaderModule,
    CardTaskModule,
    FilterModule
  ]
})
export class HomeModule { }

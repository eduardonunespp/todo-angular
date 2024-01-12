import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { HeaderModule, SideBarModule } from '../../features';
import { CardTaskModule } from '../../components';
import { FilterModule } from './components/filter/filter.module';
import { NavBarModule } from '../../components/nav-bar/nav-bar.module';
import { AddIconModule } from 'src/app/shared';
import { NgIconsModule } from '@ng-icons/core';
import { heroPlusSmallSolid } from '@ng-icons/heroicons/solid';
import { SipnnerModule } from 'src/app/shared/components';
import { ionArrowUp } from '@ng-icons/ionicons';
import { ButtonToTopModule } from '../../components/button-to-top/button-to-top.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SideBarModule,
    NavBarModule,
    HeaderModule,
    CardTaskModule,
    FilterModule,
    AddIconModule,
    NgIconsModule.withIcons({ heroPlusSmallSolid, ionArrowUp }),
    SipnnerModule,
    ButtonToTopModule
  ],
})
export class HomeModule {}

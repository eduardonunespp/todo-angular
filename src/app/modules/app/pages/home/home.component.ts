import { Component } from '@angular/core';
import { SharedSidebarDataService } from '../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private readonly sharedService: SharedSidebarDataService) {}

  homeTodoIcon: string = 'assets/home-icon.svg';

  get isActivedSide(): boolean {
    return this.sharedService.isActivedSide;
  }

  activedSide(isActive: boolean) {
    this.sharedService.isActivedSide = isActive;
  }
}

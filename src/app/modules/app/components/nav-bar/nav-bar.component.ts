import { Component, EventEmitter, Output } from '@angular/core';
import { SharedSidebarDataService } from '../../services';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/service/authorization.service';

@Component({
  selector: 'td-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  @Output() isActivedSideChange: EventEmitter<boolean> =
  new EventEmitter<boolean>();
  logoTodoSide: string = 'assets/todo-logo.svg';
  logOutTodoIcon: string = 'assets/logOut-icon.svg';

  constructor(
    private sharedService: SharedSidebarDataService,
    private route: Router,
    private authorizationService: AuthorizationService,
  ) {}

  get isActivedSide(): boolean {
    return this.sharedService.isActivedSide;
  }

  get isActivedButtonTask(): boolean {
    return this.sharedService.isActivedButtonTask;
  }

  get isActivedButtonHome(): boolean {
    return this.sharedService.isActivedButtonHome;
  }

  onActivedButtonChangeHome() {
    this.sharedService.isActivedButtonHome = true;
    this.sharedService.isActivedButtonTask = false;
  }

  onActivedButtonChangeTask() {
    this.sharedService.isActivedButtonTask = true;
    this.sharedService.isActivedButtonHome = false;
  }

  navigate(url: string) {
    return this.route.navigateByUrl(url);
  }

  logOut() {
    this.route.navigateByUrl('');
    this.authorizationService.logOut();
  }
}

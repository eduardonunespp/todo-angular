import { Component, EventEmitter, Output } from '@angular/core';
import { SharedSidebarDataService } from '../../services';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { LogOutModalComponent } from '../log-out-modal/log-out-modal.component';

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
    private dialogRef: MatDialog
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
    this.dialogRef.open(LogOutModalComponent, {
      width: '450px'
    })
  }
}

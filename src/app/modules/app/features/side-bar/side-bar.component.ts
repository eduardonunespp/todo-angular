import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SharedSidebarDataService } from '../../services';
import { AuthorizationService } from 'src/app/service/authorization.service';
import { UserService } from 'src/app/service/user.service';
import { IUser } from 'src/app/shared/domain-types';
import { Subscription } from 'rxjs';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'td-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss'],
})
export class SideBarComponent implements OnInit, AfterViewInit {
  @Output() isActivedSideChange: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  user: IUser | undefined
  logoTodoSide: string = 'assets/todo-logo.svg';
  menuTodoSide: string = 'assets/todo-menu-side.svg';
  homeTodoIcon: string = 'assets/home-icon.svg';
  homeTodoIconDark: string = 'assets/home-icon-dark.svg';
  listTodoIcon: string = 'assets/list-icon.svg';
  listTodoIconDark: string = 'assets/list-icon-dark.svg';
  userTodoIcon: string = 'assets/user-icon.svg';
  logOutTodoIcon: string = 'assets/logOut-icon.svg';
  breakpointSubscription!: Subscription;
  isSmallScreen: boolean = false;


  constructor(
    private sharedService: SharedSidebarDataService,
    private route: Router,
    private authorizationService: AuthorizationService,
    private userService: UserService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointSubscription = this.breakpointObserver
    .observe([Breakpoints.XSmall, Breakpoints.XSmall])
    .subscribe((result) => {
      this.isSmallScreen = result.matches;
    });
    
  }

  ngOnInit(): void {
    this.user = this.userService.loadUserFromCache()
  }

  emitIsActivedSide() {
    if (this.isSmallScreen) {
      this.isActivedSideChange.emit(false);
    } else {
      this.isActivedSideChange.emit(this.sharedService.isActivedSide);
    }
  }
  
  ngAfterViewInit(): void {
    this.breakpointObserver
    .observe([Breakpoints.XSmall, Breakpoints.XSmall])
    .subscribe((result) => {
      this.isSmallScreen = result.matches;
      this.emitIsActivedSide(); // Emita o evento ao mudar o tamanho da tela
    });
  }

  get isActivedSide(): boolean {
    return this.sharedService.isActivedSide;
  }

  get isActivedButtonTask(): boolean {
    return this.sharedService.isActivedButtonTask;
  }

  get isActivedButtonHome(): boolean {
    return this.sharedService.isActivedButtonHome;
  }


  activedSide() {
    this.sharedService.isActivedSide = !this.sharedService.isActivedSide;
    this.emitIsActivedSide();
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
    this.route.navigateByUrl(url);
  }

  logOut() {
    this.route.navigateByUrl('');
    this.authorizationService.logOut();
  }

  ngOnDestroy(): void {
    this.breakpointSubscription.unsubscribe();
  }
}

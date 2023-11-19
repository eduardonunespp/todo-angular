import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { SharedSidebarDataService } from '../../services';

@Component({
  selector: 'td-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  @Output() isActivedSideChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  logoTodoSide: string = 'assets/todo-logo.svg'
  menuTodoSide: string = 'assets/todo-menu-side.svg'
  homeTodoIcon: string = 'assets/home-icon.svg'
  homeTodoIconDark: string = 'assets/home-icon-dark.svg'
  listTodoIcon: string = 'assets/list-icon.svg'
  listTodoIconDark: string = 'assets/list-icon-dark.svg'
  userTodoIcon: string = 'assets/user-icon.svg'
  logOutTodoIcon: string = 'assets/logOut-icon.svg'

  constructor( private sharedService: SharedSidebarDataService, private route: Router){}
  
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
    this.sharedService.isActivedSide = !this.isActivedSide;
    this.isActivedSideChange.emit(this.isActivedSide);
  }

  onActivedButtonChangeHome(){
    this.sharedService.isActivedButtonHome = true
    this.sharedService.isActivedButtonTask = false
  }

  onActivedButtonChangeTask(){
    this.sharedService.isActivedButtonTask = true
    this.sharedService.isActivedButtonHome = false
  }

  navigate(url: string){
    this.route.navigateByUrl(url)
  }
}

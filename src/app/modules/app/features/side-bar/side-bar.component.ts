import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'td-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  @Output() isActivedSideChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  isActivedSide: boolean = false
  isActivedButton: boolean = true

  logoTodoSide: string = 'assets/todo-logo.svg'
  menuTodoSide: string = 'assets/todo-menu-side.svg'
  homeTodoIcon: string = 'assets/home-icon.svg'
  homeTodoIconDark: string = 'assets/home-icon-dark.svg'
  listTodoIcon: string = 'assets/list-icon.svg'
  listTodoIconDark: string = 'assets/list-icon-dark.svg'
  

  activedSide() {
    this.isActivedSide = !this.isActivedSide;
    this.isActivedSideChange.emit(this.isActivedSide);
  }

  onActivedButtonChange(active: boolean){
    this.isActivedButton = active

    console.log(active)
  }
}

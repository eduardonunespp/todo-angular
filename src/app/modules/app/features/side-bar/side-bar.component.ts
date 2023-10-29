import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'td-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  @Output() isActivedSideChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  isActivedSide: boolean = false


  logoTodoSide: string = 'assets/todo-logo-side.svg'
  menuTodoSide: string = 'assets/todo-menu-side.svg'


  activedSide() {
    this.isActivedSide = !this.isActivedSide;
    this.isActivedSideChange.emit(this.isActivedSide);
  }



}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'td-button-side',
  templateUrl: './button-side.component.html',
  styleUrls: ['./button-side.component.scss']
})
export class ButtonSideComponent {


  @Input() Icon: string = ''
  @Input() description: string = ''
  @Input() isActivedSide: boolean = false
  @Output() activedButtonChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  activedButton: boolean = false

  handleActiveButton(){

    this.activedButton = !this.activedButton
    this.activedButtonChange.emit(this.activedButton)
  
    console.log(this.activedButton)
  }
  
}

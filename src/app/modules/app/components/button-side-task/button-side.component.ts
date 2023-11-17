import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'td-button-task-side',
  templateUrl: './button-side.component.html',
  styleUrls: ['./button-side.component.scss']
})
export class ButtonTaskSideComponent {


  @Input() Icon: string = ''
  @Input() description: string = ''
  @Input() isActivedSide: boolean = false
  @Output() activedButtonChangeTask: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() activedButtonTask: boolean = false

  handleActiveButton(){
    this.activedButtonChangeTask.emit(true)
  }
  
}

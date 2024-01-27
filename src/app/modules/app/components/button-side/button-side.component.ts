import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'td-button-side',
  templateUrl: './button-side.component.html',
  styleUrls: ['./button-side.component.scss'],
})
export class ButtonSideComponent {
  @Input() description: string = '';
  @Input() isActivedSide: boolean = false;
  @Output() activedButtonChangeHome: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  @Input() activedButtonHome: boolean = true;

  handleActiveButton() {
    this.activedButtonChangeHome.emit(true);
  }
}

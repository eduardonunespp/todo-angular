import { Component, Input } from '@angular/core';

@Component({
  selector: 'td-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() isDisabled: boolean = false;
}

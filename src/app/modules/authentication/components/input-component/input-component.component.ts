import { Component, Input } from '@angular/core';

@Component({
  selector: 'td-input',
  templateUrl: './input-component.component.html',
  styleUrls: ['./input-component.component.scss'],
})
export class InputComponent {
  @Input() label: string = '';
  @Input() type: string = '';
}

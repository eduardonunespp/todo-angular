import { Component, Input } from '@angular/core';

@Component({
  selector: 'td-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  @Input() width: string = '20px';
  @Input() height: string = '20px';
}

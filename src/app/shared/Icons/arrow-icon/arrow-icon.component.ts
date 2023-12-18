import { Component, Input } from '@angular/core';

@Component({
  selector: 'td-arrow-icon',
  template: `
    <svg
      [attr.width]="width"
      [attr.height]="height"
      viewBox="0 -4 20 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.25 0.409119L9.5 6.65912L15.75 0.409119L18.25 1.65912L9.5 10.4091L0.75 1.65912L3.25 0.409119Z"
        fill="white"
      />
    </svg>
  `,
  styleUrls: [],
})
export class ArrowIconComponent {
  @Input() width: string = '15' 
  @Input() height: string = '15' 
}

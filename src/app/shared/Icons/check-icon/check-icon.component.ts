import { Component, Input } from '@angular/core';

@Component({
  selector: 'td-check-icon',
  template: `
    <svg
      [attr.width]="width"
      [attr.height]="height"
      viewBox="0 0 15 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
    <path d="M4 6.25L5.5 7.75L8 4.75" stroke="#25294C" stroke-width="2.58333" stroke-linecap="round" stroke-linejoin="round"/>
      <path
        d="M6 11C8.76142 11 11 8.76142 11 6C11 3.23858 8.76142 1 6 1C3.23858 1 1 3.23858 1 6C1 8.76142 3.23858 11 6 11Z"
        fill="#e9ecef"
      />
    </svg>
  `,
  styleUrls: [],
})
export class CheckIconComponent {
  @Input() width: string = '15';
  @Input() height: string = '15';
}


import { Component, Input } from '@angular/core';

@Component({
  selector: 'td-time-icon',
  template: `
    <svg
      [attr.width]="width"
      [attr.height]="height"
      viewBox="0 -2 15 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.5 0.25C3.0625 0.25 0.25 3.0625 0.25 6.5C0.25 9.9375 3.0625 12.75 6.5 12.75C9.9375 12.75 12.75 9.9375 12.75 6.5C12.75 3.0625 9.9375 0.25 6.5 0.25ZM6.5 11.5C3.74375 11.5 1.5 9.25625 1.5 6.5C1.5 3.74375 3.74375 1.5 6.5 1.5C9.25625 1.5 11.5 3.74375 11.5 6.5C11.5 9.25625 9.25625 11.5 6.5 11.5ZM6.8125 3.375H5.875V7.125L9.125 9.125L9.625 8.3125L6.8125 6.625V3.375Z"
        fill="#e9ecef"
      />
    </svg>
  `,
  styleUrls: [],
})
export class TimeIconComponente {
  @Input() width: string = '15';
  @Input() height: string = '15';
}

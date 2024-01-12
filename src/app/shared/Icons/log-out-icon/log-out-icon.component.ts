import { Component, Input } from '@angular/core';

@Component({
  selector: 'td-log-out-icon',
  template: `
    <svg
      [attr.width]="width"
      [attr.height]="height"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.625 11.0417L4.10938 11.0417L6.76562 13.6979L5.33333 15.2083L0.125 10L5.33333 4.79167L6.76563 6.30208L4.10938 8.95833L12.625 8.95833V11.0417ZM9.5 19.375V17.2917H16.7917L16.7917 2.70833H9.5V0.625H16.7917C17.3646 0.625 17.8552 0.828819 18.2635 1.23646C18.6712 1.64479 18.875 2.13542 18.875 2.70833L18.875 17.2917C18.875 17.8646 18.6712 18.3552 18.2635 18.7635C17.8552 19.1712 17.3646 19.375 16.7917 19.375H9.5Z"
        fill="white"
      />
    </svg>
  `,
  styleUrls: [],
})
export class LogOutIconComponent {
  @Input() width: string = '15';
  @Input() height: string = '15';
}

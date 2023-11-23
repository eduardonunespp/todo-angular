import { Component, Input } from '@angular/core';

@Component({
  selector: 'td-delete-icon',
  template: `
    <svg
      [attr.width]="width"
      [attr.height]="height"
      viewBox="0 0 15 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.33337 16.4856H12.3334L13.3334 5.4856H1.33337L2.33337 16.4856ZM9.33337 2.4856V0.485596H5.33337V2.4856H0.333374V5.4856L1.33337 4.4856H13.3334L14.3334 5.4856V2.4856H9.33337ZM8.33337 2.4856H6.33337V1.4856H8.33337V2.4856Z"
        fill="white"
      />
    </svg>
  `,
  styleUrls: [],
})
export class DeleteIconComponent {
  @Input() width: string = '15';
  @Input() height: string = '15';
}

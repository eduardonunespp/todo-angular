import { Component, Input } from '@angular/core';

@Component({
  selector: 'td-add-icon',
  template: `
    <svg
      [attr.width]="width"
      [attr.height]="height"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.4286
        9.14286H13.3571V2.07143C13.3571
        1.20371
        12.6534
        0.5
        11.7857
        0.5H10.2143C9.34656
        0.5
        8.64286
        1.20371
        8.64286
        2.07143V9.14286H1.57143C0.703705
        9.14286
        0
        9.84656
        0
        10.7143V12.2857C0
        13.1534
        0.703705
        13.8571
        1.57143
        13.8571H8.64286V20.9286C8.64286
        21.7963
        9.34656
        22.5
        10.2143
        22.5H11.7857C12.6534
        22.5
        13.3571
        21.7963
        13.3571
        20.9286V13.8571H20.4286C21.2963
        13.8571
        22
        13.1534
        22
        12.2857V10.7143C22
        9.84656
        21.2963
        9.14286
        20.4286
        9.14286Z"
        fill="#e9ecef"
      />
    </svg>
  `,
  styleUrls: [],
})
export class AddIconComponent {
  @Input() width: string = '15';
  @Input() height: string = '15';
}

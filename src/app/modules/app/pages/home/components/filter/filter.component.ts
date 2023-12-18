import { Component } from '@angular/core';

@Component({
  selector: 'td-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent {
  isActived: boolean = false;
  isActivedAfterTime: boolean = false;

  activeFilter(): void {
    this.isActived = !this.isActived;

    if (this.isActivedAfterTime === true) {
      this.isActivedAfterTime = true;
    }
    this.activeFilterAfterTime();
  }

  activeFilterAfterTime() {
    if (this.isActivedAfterTime === true) {
      this.isActivedAfterTime = false;
    } else {
      setTimeout(() => {
        this.isActivedAfterTime = !this.isActivedAfterTime;
      }, 300);
    }
  }
}

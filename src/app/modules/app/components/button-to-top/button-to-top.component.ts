import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'td-button-to-top',
  templateUrl: './button-to-top.component.html',
  styleUrls: ['./button-to-top.component.scss'],
})
export class ButtonToTopComponent {
  isScroll: boolean = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    this.isScroll = scrollPosition > 250;
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

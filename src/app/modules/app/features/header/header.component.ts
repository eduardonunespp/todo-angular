import { Component, Input } from '@angular/core';

@Component({
  selector: 'td-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() Icon: string = '' 
  @Input() title: string = ''
  @Input() description: string = '' 
}

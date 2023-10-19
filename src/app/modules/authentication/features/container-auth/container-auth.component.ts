import { Component, Input } from '@angular/core';

@Component({
  selector: 'td-container-auth',
  templateUrl: './container-auth.component.html',
  styleUrls: ['./container-auth.component.scss'],
})
export class ContainerAuthComponent {
  @Input() title: string = '';
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'td-card-task',
  templateUrl: './card-task.component.html',
  styleUrls: ['./card-task.component.scss']
})
export class CardTaskComponent {

  @Input() status: number = 1

  listCardIcon: string = 'assets/list-card.svg'
  timeCardIcon: string = 'assets/time-card.svg'
  infoCardIcon: string = 'assets/info-card.svg'
}

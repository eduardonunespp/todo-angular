import { Component } from '@angular/core';

@Component({
  selector: 'td-card-task',
  templateUrl: './card-task.component.html',
  styleUrls: ['./card-task.component.scss']
})
export class CardTaskComponent {

  listCardIcon: string = 'assets/list-card.svg'
  timeCardIcon: string = 'assets/time-card.svg'
  infoCardIcon: string = 'assets/info-card.svg'
}

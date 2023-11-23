import { Component } from '@angular/core';
import { SharedSidebarDataService } from '../../services';

@Component({
  selector: 'td-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss'],
})
export class ListTaskComponent {
  constructor(private readonly sharedService: SharedSidebarDataService) {}

  listTodoIcon: string = 'assets/list-icon.svg';

  dataSource = [
    {
      name: 'Lorem Ispum',
      description: 'Lorem Ispum',
    },
    {
      name: 'Lorem Ispum',
      description: 'Lorem Ispum',
    },
    {
      name: 'Lorem Ispum',
      description: 'Lorem Ispum',
    },
    {
      name: 'Lorem Ispum',
      description: 'Lorem Ispum',
    },
    {
      name: 'Lorem Ispum',
      description: 'Lorem Ispum',
    },
    {
      name: 'Lorem Ispum',
      description: 'Lorem Ispum',
    },
    {
      name: 'Lorem Ispum',
      description: 'Lorem Ispum',
    },
    {
      name: 'Lorem Ispum',
      description: 'Lorem Ispum',
    },
  ];

  columnsToDisplay = ['name', 'actions'];
  get isActivedSide(): boolean {
    return this.sharedService.isActivedSide;
  }

  activedSide(isActive: boolean) {
    this.sharedService.isActivedSide = isActive;
  }
}

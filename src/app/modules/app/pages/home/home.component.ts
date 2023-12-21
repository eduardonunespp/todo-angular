import { Component } from '@angular/core';
import { SharedListsTaskDataService, SharedSidebarDataService } from '../../services';
import { Subscription } from 'rxjs';
import { IAssignments, ITaskListById } from '../../types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  taskDataSubscription!: Subscription;
  assignments!: IAssignments[];
  isAssignment: boolean = false;

  constructor(
    private readonly sharedService: SharedSidebarDataService,
    private sharedDataTaskService: SharedListsTaskDataService
  ) {
    this.taskDataSubscription = this.sharedDataTaskService.taskData$.subscribe(
      (data: ITaskListById) => {
        if (
          data &&
          data.assignments.length &&
          Array.isArray(data.assignments)
        ) {
          this.isAssignment = true;
          this.assignments = data.assignments;
        } else {
          this.isAssignment = false;
        }
      },
      (error) => {
        // Trate o erro, se necessário
        console.error(error);
      }
    );
  }

  homeTodoIcon: string = 'assets/home-icon.svg';

  get isActivedSide(): boolean {
    return this.sharedService.isActivedSide;
  }

  activedSide(isActive: boolean) {
    this.sharedService.isActivedSide = isActive;
  }
}

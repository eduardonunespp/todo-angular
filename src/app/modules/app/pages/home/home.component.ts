import { AfterViewInit, Component } from '@angular/core';
import { SharedListsTaskDataService, SharedSidebarDataService } from '../../services';
import { Subscription } from 'rxjs';
import { IAssignments, ITaskListById } from '../../types';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  taskDataSubscription!: Subscription;
  assignments!: IAssignments[];
  nameList: string = ''
  isAssignment: boolean = false;
  homeTodoIcon: string = 'assets/home-icon.svg';

  constructor(
    private readonly sharedService: SharedSidebarDataService,
    private sharedDataTaskService: SharedListsTaskDataService
  ) {}

  ngAfterViewInit(): void {
    this.taskDataSubscription = this.sharedDataTaskService.taskData$.subscribe(
      (data: ITaskListById) => {
        if (
          data &&
          data.assignments.length &&
          Array.isArray(data.assignments)
        ) {
          this.isAssignment = true;
          this.assignments = data.assignments;
          this.nameList = data.name
        } else {
          this.isAssignment = false;
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }

  get isActivedSide(): boolean {
    return this.sharedService.isActivedSide;
  }

  activedSide(isActive: boolean) {
    this.sharedService.isActivedSide = isActive;
  }
}

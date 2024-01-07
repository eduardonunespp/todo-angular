import { AfterViewInit, Component } from '@angular/core';
import {
  SharedListsTaskDataService,
  SharedSidebarDataService,
  TaskListService,
  TaskService,
} from '../../services';
import { Subscription } from 'rxjs';
import { IAssignments, ITaskListById } from '../../types';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  taskDataSubscription!: Subscription;
  taskListDataSubscription!: Subscription

  assignments!: IAssignments[];
  nameList: string = '';
  isAssignment: boolean = true;
  homeTodoIcon: string = 'assets/home-icon.svg';
  isSmallScreen: boolean = false;
  breakpointSubscription!: Subscription;
  isFiltered: boolean = false;

  constructor(
    private readonly sharedService: SharedSidebarDataService,
    private sharedDataTaskService: SharedListsTaskDataService,
    private assignmentsService: TaskService,
    private assignmentListService: TaskListService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointSubscription = this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.XSmall])
      .subscribe((result) => {
        this.isSmallScreen = result.matches;
      });

    this.taskDataSubscription = this.assignmentsService
      .onTaskListUpdated()
      .subscribe(() => {
        if(!this.isFiltered){
          this.loadAssignments()
        }
      });
    this.taskListDataSubscription = this.assignmentListService
      .onTaskListUpdated()
      .subscribe(() => {
        this.isFiltered = true
        if(this.isFiltered){
          this.loadFilter()
        }
      });

      this.sharedDataTaskService.isClearFilter$.subscribe((isClearFilter) => {
        if(isClearFilter){
          this.loadAssignments()
          this.sharedDataTaskService.clearFilterHandled();
          this.isFiltered = false
        }
      })
  }

  ngAfterViewInit(): void {
    this.loadAssignments();
  }

  loadAssignments() {
    this.assignmentsService.getAssignemnts().subscribe(
      (response) => {
        const { items } = response;
        if(items && items.length > 0){
          this.assignments = items;
          this.isAssignment = true
        }else {
          this.isAssignment = false
        }
       
       
      },
      (error) => {
        const { message } = error.error;
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: message,
          showConfirmButton: true,
        });
      }
    );
  }

  loadFilter() {
    this.sharedDataTaskService.taskData$.subscribe(
      (data: ITaskListById) => {
        if (
          data &&
          data.assignments.length &&
          Array.isArray(data.assignments)
        ) {
          this.isAssignment = true;
          this.assignments = data.assignments;
          this.nameList = data.name;
        } else {
          this.isAssignment = false;
        }
      },
      (errors) => {
        const { message } = errors.error;
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: message,
          showConfirmButton: true,
        });
      }
    );
  }

  isSmallScreenFunction(): boolean {
    return this.isSmallScreen;
  }

  get isActivedSide(): boolean {
    return this.sharedService.isActivedSide;
  }

  activedSide(isActive: boolean) {
    this.sharedService.isActivedSide = isActive;
  }

  ngOnDestroy(): void {
    this.breakpointSubscription.unsubscribe();
  }
}

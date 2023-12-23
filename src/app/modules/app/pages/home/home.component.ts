import { AfterViewInit, Component } from '@angular/core';
import { SharedListsTaskDataService, SharedSidebarDataService } from '../../services';
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
  assignments!: IAssignments[];
  nameList: string = ''
  isAssignment: boolean = false;
  homeTodoIcon: string = 'assets/home-icon.svg';
  isSmallScreen: boolean = false;
  breakpointSubscription!: Subscription;

  constructor(
    private readonly sharedService: SharedSidebarDataService,
    private sharedDataTaskService: SharedListsTaskDataService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointSubscription = this.breakpointObserver
    .observe([Breakpoints.XSmall, Breakpoints.XSmall])
    .subscribe((result) => {
      this.isSmallScreen = result.matches;
    });
  }

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
        const { erros } = error.error;
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: erros,
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

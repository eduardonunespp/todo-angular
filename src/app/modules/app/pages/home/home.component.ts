import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  HostListener,
} from '@angular/core';
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
import { Store } from '@ngrx/store';
import { AppStore } from 'src/app/store/app-store';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  taskDataSubscription: Subscription | undefined;
  taskListDataSubscription: Subscription | undefined;
  assignments: IAssignments[] | undefined;
  nameList: string = '';
  isAssignment: boolean = true;
  homeTodoIcon: string = 'assets/home-icon.svg';
  isSmallScreen: boolean = false;
  breakpointSubscription!: Subscription;
  isFiltered: boolean = false;
  isLoadingAssignmentsGhost: boolean = false;
  isLoadingAssignments: boolean = false;
  perPage: number = 10;
  isScroll: boolean = false;
  ghostCardsCount: any = 10;

  constructor(
    private readonly sharedService: SharedSidebarDataService,
    private sharedDataTaskService: SharedListsTaskDataService,
    private assignmentsService: TaskService,
    private assignmentListService: TaskListService,
    private breakpointObserver: BreakpointObserver,
    private store: Store<{ app: AppStore }>
  ) {
    this.breakpointSubscription = this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.XSmall])
      .subscribe((result) => {
        this.isSmallScreen = result.matches;
      });

    this.store.select('app').subscribe((state) => {
      if (state.isClearFilter == true) {
        this.isFiltered = false;
        this.loadAssignments(this.perPage);
      } else {
        this.isFiltered = true;
      }
    });

    this.taskDataSubscription = this.assignmentsService
      .onTaskUpdated()
      .subscribe(() => {
        if (!this.isFiltered) {
          this.loadAssignments(this.perPage);
        }
      });

    this.taskListDataSubscription = this.assignmentListService
      .onTaskListUpdated()
      .subscribe(() => {
        this.isFiltered = true;
        if (this.isFiltered) {
          this.loadFilter(this.perPage);
        }
      });
  }

  ngAfterViewInit(): void {
    this.loadAssignments(this.perPage);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    this.isScroll = scrollPosition > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  loadAssignmentsPlus(): void {
    this.perPage += 10;
    if (this.isFiltered == false) {
      this.loadAssignmentsByPagination(this.perPage);
    } else {
      this.loadFilter(this.perPage);
    }
  }

  loadAssignmentsByPagination(perPage: number) {
    this.isLoadingAssignments = true;
    this.assignmentsService.getAssignemnts(perPage).subscribe(
      (response) => {
        const { items } = response;
        console.log(items);
        if (items && items.length > 0) {
          this.assignments = items;
          this.isAssignment = true;
          this.nameList = items.assignmentListName;
        } else {
          this.isAssignment = false;
        }
        this.isLoadingAssignments = false;
      },
      (error) => {
        const { message } = error.error;
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: message,
          showConfirmButton: true,
        });
        this.isLoadingAssignments = false;
      }
    );
  }

  loadAssignments(perPage: number) {
    this.isLoadingAssignmentsGhost = true;
    this.assignmentsService.getAssignemnts(perPage).subscribe(
      (response) => {
        const { items } = response;
        console.log(items);
        if (items && items.length > 0) {
          this.assignments = items;
          this.isAssignment = true;
          this.nameList = items.assignmentListName;
        } else {
          this.isAssignment = false;
        }
        this.isLoadingAssignmentsGhost = false;
      },
      (error) => {
        const { message } = error.error;
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: message,
          showConfirmButton: true,
        });
        this.isLoadingAssignmentsGhost = false;
      }
    );
  }

  loadFilter(perPage: number) {
    this.sharedDataTaskService.taskData$.subscribe(
      (data: ITaskListById) => {
        const { assignments } = data;
        if (data && assignments.length && Array.isArray(assignments)) {
          this.isAssignment = true;
          this.assignments = assignments.slice(0, perPage);
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

  get isActivedSide(): boolean {
    return this.sharedService.isActivedSide;
  }

  isSmallScreenFunction(): boolean {
    return this.isSmallScreen;
  }

  activedSide(isActive: boolean) {
    this.sharedService.isActivedSide = isActive;
  }

  ngOnDestroy(): void {
    this.breakpointSubscription.unsubscribe();
  }
}

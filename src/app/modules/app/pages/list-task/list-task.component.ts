import { AfterViewInit, Component, OnDestroy, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';
import { SharedSidebarDataService } from '../../services';
import { TaskListService } from '../../services/task-list.service';
import { ITaskList } from '../../types';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { RemoveListModalComponent } from './components/modals/remove-list-modal/remove-list-modal.component';
import { EditListModalComponent } from './components/modals/edit-list-modal/edit-list-modal.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'td-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss'],
})
export class ListTaskComponent implements AfterViewInit, OnDestroy {
  columnsToDisplay: string[] = ['name', 'actions'];
  ELEMENT_DATA: ITaskList[] = [];
  listTodoIcon: string = 'assets/list-icon.svg';
  isSmallScreen: boolean = false;
  breakpointSubscription!: Subscription;

  dataSource = new MatTableDataSource<ITaskList>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  taskListSubscription!: Subscription;

  constructor(
    private readonly sharedService: SharedSidebarDataService,
    private readonly taskListService: TaskListService,
    private dialogRef: MatDialog,
    private breakpointObserver: BreakpointObserver
  ) {
    this.breakpointSubscription = this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.XSmall])
      .subscribe((result) => {
        this.isSmallScreen = result.matches;
      });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;

    this.taskListSubscription = this.taskListService
      .onTaskListUpdated()
      .subscribe(() => {
        this.loadData();
      });

    this.loadData();
  }

  ngOnDestroy(): void {
    this.taskListSubscription.unsubscribe();
    this.breakpointSubscription.unsubscribe();
  }

  isSmallScreenFunction(): boolean {
    return this.isSmallScreen;
  }

  private loadData(): void {
    this.taskListService.getTaskList().subscribe(
      (response) => {
        const { items } = response;
        this.ELEMENT_DATA = items;
        this.dataSource.data = this.ELEMENT_DATA;
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

  openDeleteModal(id: string, name: string): void {
    this.dialogRef.open(RemoveListModalComponent, {
      width: '490px',
      data: {
        id: id,
        name: name,
      },
    });
  }

  openEditModal(id: string, name: string): void {
    this.dialogRef.open(EditListModalComponent, {
      width: '550px',
      data: {
        id: id,
        name: name,
      },
    });
  }

  get isActivedSide(): boolean {
    return this.sharedService.isActivedSide;
  }

  activedSide(isActive: boolean) {
    this.sharedService.isActivedSide = isActive;
  }
}

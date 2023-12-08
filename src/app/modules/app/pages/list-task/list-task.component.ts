import {
  AfterViewInit,
  Component,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import Swal from 'sweetalert2';
import { SharedSidebarDataService } from '../../services';
import { TaskListService } from '../../services/task-list.service';
import { ITaskList } from '../../types';
import { Subscription } from 'rxjs';

@Component({
  selector: 'td-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss'],
})
export class ListTaskComponent implements AfterViewInit, OnDestroy {
  columnsToDisplay: string[] = ['name', 'actions'];
  ELEMENT_DATA: ITaskList[] = [];

  dataSource = new MatTableDataSource<ITaskList>([]);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  private taskListSubscription!: Subscription;

  constructor(
    private readonly sharedService: SharedSidebarDataService,
    private readonly taskListService: TaskListService
  ) {}

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
        console.log(erros);
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: erros,
          showConfirmButton: true,
        });
      }
    );
  }

  listTodoIcon: string = 'assets/list-icon.svg';

  get isActivedSide(): boolean {
    return this.sharedService.isActivedSide;
  }

  activedSide(isActive: boolean) {
    this.sharedService.isActivedSide = isActive;
  }
}

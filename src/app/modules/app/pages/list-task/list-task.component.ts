import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { SharedSidebarDataService } from '../../services';
import { MatPaginator } from '@angular/material/paginator';
import { IDataMock } from '../../../../shared/domain-types';
import { MatTableDataSource } from '@angular/material/table';

const ELEMENT_DATA: IDataMock[] = [
  {
    name: 'Sim',
  },
  {
    name: 'Sim Novamente',
  },
  {
    name: 'Sim Novamente',
  },
  {
    name: 'Sim Novamente',
  },
  {
    name: 'Sim Novamente',
  },
  {
    name: 'Sim Novamente',
  },
  {
    name: 'Sim',
  },
  {
    name: 'Sim Novamente',
  },
  {
    name: 'Sim Novamente',
  },
  {
    name: 'Sim Novamente',
  },
  {
    name: 'Sim Novamente',
  },
  {
    name: 'Sim Novamente',
  },
];

@Component({
  selector: 'td-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.scss'],
})
export class ListTaskComponent implements AfterViewInit {
  columnsToDisplay: string[] = ['name', 'actions'];
  dataSource = new MatTableDataSource<IDataMock>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  constructor(private readonly sharedService: SharedSidebarDataService) {}
  listTodoIcon: string = 'assets/list-icon.svg';

  get isActivedSide(): boolean {
    return this.sharedService.isActivedSide;
  }

  activedSide(isActive: boolean) {
    this.sharedService.isActivedSide = isActive;
  }
}

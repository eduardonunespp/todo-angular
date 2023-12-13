import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddListModalComponent } from '../../pages/list-task/components/modals/add-list-modal/add-list-modal.component';
import { AddTaskModalComponent } from '../../pages/home/components/modals/add-task-modal/add-task-modal.component';

@Component({
  selector: 'td-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private dialogRef: MatDialog) {}

  @Input() Icon: string = '';
  @Input() title: string = '';
  @Input() description: string = '';

  modalAttr: any = AddListModalComponent

  ngOnInit(): void {
    if(this.title === 'Listas'){
      this.modalAttr = AddListModalComponent
    }else {
      this.modalAttr = AddTaskModalComponent
    }
  }

  openModal() {
    this.dialogRef.open(this.modalAttr, {
      width: '550px'
    });
  }
}

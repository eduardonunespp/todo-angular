import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddListModalComponent } from '../../pages/list-task/components/modals/add-list-modal/add-list-modal.component';

@Component({
  selector: 'td-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private dialogRef: MatDialog) {}

  @Input() Icon: string = '';
  @Input() title: string = '';
  @Input() description: string = '';

  openModal() {
    this.dialogRef.open(AddListModalComponent, {
      width: '550px'
    });
  }
}

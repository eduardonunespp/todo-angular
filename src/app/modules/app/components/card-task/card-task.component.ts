import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConcludeTaskModalComponent } from '../../pages/home/components/modals/conclude-task-modal/conclude-task-modal.component';
import { DeleteTaskModalComponent } from '../../pages/home/components/modals/delete-task-modal/delete-task-modal.component';
import { UnconcludeTaskModalComponent } from '../../pages/home/components/modals/unconclude-task-modal/unconclude-task-modal.component';
import { ViewTaskModalComponent } from '../../pages/home/components/modals/view-task-modal/view-task-modal.component';
import { EditTaskModalComponent } from '../../pages/home/components/modals/edit-task-modal/edit-task-modal.component';

@Component({
  selector: 'td-card-task',
  templateUrl: './card-task.component.html',
  styleUrls: ['./card-task.component.scss'],
})
export class CardTaskComponent implements OnInit {
  @Input() status: number = 2;
  @Input() description: string = '';
  @Input() deadline: string = '';
  @Input() concluded!: boolean;
  @Input() id: string = '';
  @Input() nameList: string = '';

  injectConcluded: boolean = false;

  listCardIcon: string = 'assets/list-card.svg';
  timeCardIcon: string = 'assets/time-card.svg';
  infoCardIcon: string = 'assets/info-card.svg';

  constructor(private dialogRef: MatDialog) {}

  ngOnInit(): void {
    this.statusTask();
    this.injectConcluded = this.concluded;
  }

  formatDeadLine(): string {
    const months = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro',
    ];

    const date = new Date(this.deadline);
    const day = date.getDate();
    const timeHour = date.getHours();
    const timeMinutes = date.getMinutes();
    const month = months[date.getMonth()];
    const formattedTime = `${day} de ${month}, ${timeHour
      .toString()
      .padStart(2, '0')}:${timeMinutes.toString().padStart(2, '0')}`;

    return formattedTime;
  }

  statusTask() {
    const currentDate = new Date();
    const deadlineDate = new Date(this.deadline);

    if (this.concluded === true) {
      return (this.status = 0);
    } else if (this.concluded === false && deadlineDate > currentDate) {
      return (this.status = 1);
    } else if (this.concluded === false && deadlineDate < currentDate) {
      return (this.status = 2);
    } else {
      return 2;
    }
  }

  openViewModal(id: string, name: string): void {
    this.dialogRef.open(ViewTaskModalComponent, {
      width: '490px',
      data: {
        id: id,
        name: name,
      },
    });
  }

  openModalByStatus(id: string, description: string): void {
    if (this.concluded === false) {
      this.openConcludeModal(id, description);
    } else {
      this.openUnconcludeModal(id, description);
    }
  }

  openEditModal(id: string, description: string, deadLine: string): void {
    this.dialogRef.open(EditTaskModalComponent, {
      width: '490px',
      data: {
        assignmentListId: id,
        description: description,
        deadLine: deadLine,
      },
    });
  }

  openConcludeModal(id: string, name: string): void {
    this.dialogRef.open(ConcludeTaskModalComponent, {
      width: '490px',
      data: {
        id: id,
        name: name,
      },
    });
  }

  openUnconcludeModal(id: string, name: string): void {
    this.dialogRef.open(UnconcludeTaskModalComponent, {
      width: '490px',
      data: {
        id: id,
        name: name,
      },
    });
  }

  openDeleteModal(id: string, name: string): void {
    this.dialogRef.open(DeleteTaskModalComponent, {
      width: '490px',
      data: {
        id: id,
        name: name,
      },
    });
  }
}

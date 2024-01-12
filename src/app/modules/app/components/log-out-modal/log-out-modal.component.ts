import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthorizationService } from 'src/app/service/authorization.service';

@Component({
  selector: 'app-log-out-modal',
  templateUrl: './log-out-modal.component.html',
  styleUrls: ['./log-out-modal.component.scss'],
})
export class LogOutModalComponent {
  constructor(
    private dialog: MatDialog,
    private authorizationService: AuthorizationService,
    private route: Router
  ) {}

  closeModal(): void {
    this.dialog.closeAll();
  }

  logOut(): void {
    this.dialog.closeAll();
    this.route.navigateByUrl('');
    this.authorizationService.logOut();
  }
}

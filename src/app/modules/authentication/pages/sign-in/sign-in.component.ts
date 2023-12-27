import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Cache } from 'src/app/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent implements AfterViewInit {
  constructor(private dialog: MatDialog) {}

  ngAfterViewInit(): void {
    const userLogged = !!Cache.getSession({key: 'accessToken'})

    if(!userLogged){
      this.dialog.closeAll()
    }
  }
}

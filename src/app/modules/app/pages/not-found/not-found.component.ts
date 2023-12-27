import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Cache } from '../../../../core/adapters';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  constructor(private location: Location, private route: Router) {}

  backPage() {
    const userLogged = !!Cache.getSession({ key: 'accessToken' });
    if (userLogged) {
      this.location.back();
    } else {
      this.route.navigateByUrl('/');
    }
  }
}

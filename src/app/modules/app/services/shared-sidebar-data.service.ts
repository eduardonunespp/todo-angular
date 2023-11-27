import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SharedSidebarDataService {
  isActivedSide: boolean = false;
  isActivedButtonHome: boolean = true;
  isActivedButtonTask: boolean = false;

  constructor(private router: Router) {
    this.initializeStateBasedOnRoute();

    this.router.events
      .pipe(filter((event: any) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.initializeStateBasedOnRoute();
      });
  }

  private initializeStateBasedOnRoute() {
    const currentRoute = this.router.url;

    this.isActivedButtonHome = currentRoute === '/home';
    this.isActivedButtonTask = currentRoute === '/list';
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthorizationService } from '../../service/authorization.service';

@Injectable({
  providedIn: 'root',
})
export class AuthorizedGuard  {
  constructor(
    private authorizationService: AuthorizationService,
    private route: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const userLogged = this.authorizationService.obterLoginStatus();
    if (userLogged) {
      return true;
    } else {
      this.route.navigateByUrl('not-found');
      return false;
    }
  }
}

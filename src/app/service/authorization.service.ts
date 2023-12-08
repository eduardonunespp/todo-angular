import { Injectable } from '@angular/core';
import { Cache } from '../core';

@Injectable({
  providedIn: 'root',
})
export class AuthorizationService {
  constructor() {}

  logOut() {
    sessionStorage.clear();
  }

  obterLoginStatus() {
    return !!Cache.getSession({ key: 'accessToken' });
  }
}

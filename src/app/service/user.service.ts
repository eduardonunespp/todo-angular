import { Injectable } from '@angular/core';
import { IUser } from '../shared/domain-types'
import { BehaviorSubject } from 'rxjs';
import { Cache } from '../core/adapters'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { 
 
  }
  private _user = new BehaviorSubject<IUser>({ name: '', email: '', id: '' });

  get user$() {
    return this._user.asObservable();
  }

  setUser(user: IUser) {
    Cache.setSession({ key: 'currentUser', value: user })
    this._user.next(user);
  }

  loadUserFromCache() {
    const storedUser: IUser = Cache.getSession({ key: 'currentUser'})

    if(!storedUser){
      return undefined
    }

    return storedUser
  }
}

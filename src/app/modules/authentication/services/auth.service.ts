import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { IregisterUsers, IloginUsers } from '../types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  response!: any;

  constructor(private http: HttpClient) {}

  registerUser(data: IregisterUsers) {
    return this.http.post(`${environment.apiUrl}/user/register`, data);
  }

  loginUser(data: IloginUsers) {
    return (this.response = this.http.post(
      `${environment.apiUrl}/auth`,
      data
    ));
  }
}

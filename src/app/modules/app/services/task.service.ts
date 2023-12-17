import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Task } from '../types';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getList(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/AssignmentList`)
  }

  addTask(data: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/Assignments`, data)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ITaskList } from '../types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskListService {
  constructor(private http: HttpClient) {}

  addTaskList(data: ITaskList) {
    return this.http.post(`${environment.apiUrl}/AssignmentList`, data);
  }

  getTaskList(): Observable<ITaskList> {
    return this.http.get<ITaskList>(`${environment.apiUrl}/AssignmentList`);
  }
}

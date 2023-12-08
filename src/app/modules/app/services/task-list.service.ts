import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { ITaskList } from '../types';
import { Observable, Subject, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskListService {
  constructor(private http: HttpClient) {}
  private taskListUpdatedSubject = new Subject<void>();
  

  addTaskList(data: ITaskList) {
    return this.http.post(`${environment.apiUrl}/AssignmentList`, data).pipe(
      tap(() => this.taskListUpdatedSubject.next())
    );

  }

  getTaskList(): Observable<any> {
    const params = new HttpParams().set('PerPage', '1000')

    return this.http.get(`${environment.apiUrl}/AssignmentList`, { params });
  }

  onTaskListUpdated(): Observable<void> {
    return this.taskListUpdatedSubject.asObservable();
  }
}

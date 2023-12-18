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
    return this.http
      .post(`${environment.apiUrl}/AssignmentList`, data)
      .pipe(tap(() => this.taskListUpdatedSubject.next()));
  }

  getTaskList(): Observable<any> {
    const params = new HttpParams().set('PerPage', '1000');

    return this.http.get(`${environment.apiUrl}/AssignmentList`, { params });
  }

  getTaskListById(id: string): Observable<any> {
    return this.http
      .get(`${environment.apiUrl}/AssignmentList/${id}`)
      .pipe(tap(() => this.taskListUpdatedSubject.next()));
  }

  editTaskList(id: string, data: ITaskList): Observable<any> {
    const { name } = data;
    return this.http
      .put(`${environment.apiUrl}/AssignmentList/${id}`, { id, name })
      .pipe(tap(() => this.taskListUpdatedSubject.next()));
  }

  removeTaskList(id: string): Observable<any> {
    return this.http
      .delete(`${environment.apiUrl}/AssignmentList/${id}`)
      .pipe(tap(() => this.taskListUpdatedSubject.next()));
  }

  onTaskListUpdated(): Observable<void> {
    return this.taskListUpdatedSubject.asObservable();
  }
}

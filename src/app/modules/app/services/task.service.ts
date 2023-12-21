import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}
  private taskListUpdatedSubject = new Subject<void>();

  getList(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/AssignmentList`);
  }

  addTask(data: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/Assignments`, data);
  }

  concludeTask(id: string): Observable<any> {
    return this.http.patch(
      `${environment.apiUrl}/Assignments/${id}/conclude`,
      null
    ).pipe(tap(() => this.taskListUpdatedSubject.next()));
  }

  onTaskListUpdated(): Observable<void> {
    return this.taskListUpdatedSubject.asObservable();
  }
}

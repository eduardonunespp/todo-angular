import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor(private http: HttpClient) {}
  private taskUpdatedSubject = new Subject<void>();

  getAssignemnts(): Observable<any> {
    const params = new HttpParams().set('PerPage', '1000')

    return this.http.get(`${environment.apiUrl}/assignments`, {params});
  }

  addTask(data: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/assignments`, data).pipe(tap(() => {
      this.taskUpdatedSubject.next()
    }))
  }

  concludeTask(id: string): Observable<any> {
    return this.http.patch(
      `${environment.apiUrl}/assignments/${id}/conclude`,
      null
    ).pipe(tap(() => this.taskUpdatedSubject.next()));
  }

  unconcludeTask(id: string): Observable<any> {
    return this.http.patch(
      `${environment.apiUrl}/assignments/${id}/unconclude`,
      null
    ).pipe(tap(() => this.taskUpdatedSubject.next()));
  }

  deleteTask(id: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/assignments/${id}`).pipe(tap(() => {
      this.taskUpdatedSubject.next()
    }))
  }

  onTaskUpdated(): Observable<void> {
    return this.taskUpdatedSubject.asObservable();
  }
}

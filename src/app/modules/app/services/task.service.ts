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

  getAssignemnts(perPage: number): Observable<any> {
    const params = new HttpParams().set('PerPage', perPage)

    return this.http.get(`${environment.apiUrl}/Assignments`, {params});
  }

  addTask(data: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}/Assignments`, data).pipe(tap(() => {
      this.taskUpdatedSubject.next()
    }))
  }

  editTask( id: string, data: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}/Assignments/${id}`, data).pipe(tap(() => {
      this.taskUpdatedSubject.next()
    }))
  }

  concludeTask(id: string): Observable<any> {
    return this.http.patch(
      `${environment.apiUrl}/Assignments/${id}/conclude`,
      null
    ).pipe(tap(() => this.taskUpdatedSubject.next()));
  }

  unconcludeTask(id: string): Observable<any> {
    return this.http.patch(
      `${environment.apiUrl}/Assignments/${id}/unconclude`,
      null
    ).pipe(tap(() => this.taskUpdatedSubject.next()));
  }

  deleteTask(id: string): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/Assignments/${id}`).pipe(tap(() => {
      this.taskUpdatedSubject.next()
    }))
  }

  onTaskUpdated(): Observable<void> {
    return this.taskUpdatedSubject.asObservable();
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITaskListById } from '../types';

@Injectable({
  providedIn: 'root',
})
export class SharedListsTaskDataService {
  private taskDataSubject = new BehaviorSubject<any>(null);
  taskData$: Observable<ITaskListById> = this.taskDataSubject.asObservable();

  constructor() {}

  setTaskData(data: ITaskListById) {
    this.taskDataSubject.next(data);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ITaskListById } from '../types';

@Injectable({
  providedIn: 'root',
})
export class SharedListsTaskDataService {
  private taskDataSubject = new BehaviorSubject<any>(null);
  private isClearFilterSubject = new BehaviorSubject<boolean>(false)

  taskData$: Observable<ITaskListById> = this.taskDataSubject.asObservable();
  isClearFilter$: Observable<boolean> = this.isClearFilterSubject.asObservable();

  setTaskData(data: ITaskListById) {
    this.taskDataSubject.next(data);
  }

  setClearFilter(){
    this.isClearFilterSubject.next(true)
  }

  clearFilterHandled() {
    console.log('Clearing filter...');
    this.isClearFilterSubject.next(false);
    console.log('Filter cleared.');
  }
}

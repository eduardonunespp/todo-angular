import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { ImsgError, msg } from 'src/app/shared';
import { SharedListsTaskDataService, TaskListService, TaskService } from 'src/app/modules/app/services';
import { ItaskListFilter } from 'src/app/modules/app/types';

@Component({
  selector: 'td-filter-task-form',
  templateUrl: './filter-task-form.component.html',
  styleUrls: ['./filter-task-form.component.scss'],
})
export class FilterTaskFormComponent implements AfterViewInit {
  listTasks: any[] = [];
  IsDisable: boolean = false;
  msg: ImsgError = msg;
  isLoading: boolean = false
  
  taskListSubscription!: Subscription;

  constructor(
    private fb: FormBuilder,
    private taskListService: TaskListService,
    private sharedDataTaskList: SharedListsTaskDataService,
    private taskService: TaskService
  ) {
    this.taskListSubscription = this.taskService.onTaskListUpdated().subscribe(() => {
      this.filterTasks()
    })
  }

  ngAfterViewInit(): void {
    this.taskListService.getTaskList().subscribe((response) => {
      const { items } = response;
      this.listTasks = items;
    });

  }

  filterTaskForm: FormGroup = this.fb.group({
    assignmentListId: ['', [Validators.required]],
  });

  hasAssignmentListIdError() {
    return this.isInvalid('assignmentListId', 'required');
  }

  filterTasks() {
    this.isLoading = true
    let payload: ItaskListFilter = this.filterTaskForm.value;
    if (this.filterTaskForm.valid) {
      this.taskListService.getTaskListById(payload.assignmentListId).subscribe(
        (response) => {
          this.sharedDataTaskList.setTaskData(response)
          this.isLoading = false
        },
        (error) => {
          console.log(error);
          this.isLoading = false
        }
      );
    }
  }

  isInvalid(inputName: string, validatorName: string) {
    const formControl: any = this.filterTaskForm.get(inputName);
    console.log(formControl.errors);
    if (formControl.errors !== null) {
      return (
        formControl.errors[validatorName] &&
        this.filterTaskForm.get(inputName)?.touched
      );
    }
  }
}

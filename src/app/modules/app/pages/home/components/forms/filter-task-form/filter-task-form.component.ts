import { Subscription } from 'rxjs';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ImsgError, msg } from 'src/app/shared';
import {
  FormStateService,
  SharedListsTaskDataService,
  TaskListService,
  TaskService,
} from 'src/app/modules/app/services';
import { ItaskListFilter } from 'src/app/modules/app/types';
import { NgZone } from '@angular/core';

@Component({
  selector: 'td-filter-task-form',
  templateUrl: './filter-task-form.component.html',
  styleUrls: ['./filter-task-form.component.scss'],
})
export class FilterTaskFormComponent implements OnInit {
  listTasks: any[] = [];
  IsDisable: boolean = false;
  msg: ImsgError = msg;
  isLoading: boolean = false;
  taskListSubscription!: Subscription;

  
  isFiltered!: boolean;

  constructor(
    private fb: FormBuilder,
    private taskListService: TaskListService,
    private sharedDataTaskList: SharedListsTaskDataService,
    private formStateService: FormStateService,
    private taskService: TaskService,
    private cdr: ChangeDetectorRef,
    private ngZone: NgZone
  ) {
    this.taskListSubscription = this.taskService
      .onTaskUpdated()
      .subscribe(() => {
        this.filterTasks();
      });

    this.filterTaskForm.get('assignmentListId')?.setValue('');

    this.sharedDataTaskList.isClearFilter$.subscribe((isCLearFilter) => {
      this.ngZone.run(() => {
        isCLearFilter ? (this.isFiltered = false) : (this.isFiltered = true);
        console.log(isCLearFilter, 'clear filter')
        this.cdr.detectChanges();
      });
    });
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.taskListService.getTaskList().subscribe((response) => {
        const { items } = response;
        this.listTasks = items;
      });

      this.cdr.detectChanges();
    }, 0);

    setTimeout(() => {
      const savedAssignmentListId =
        this.formStateService.getFormState('filterTaskForm').assignmentListId;
      this.filterTaskForm
        .get('assignmentListId')
        ?.setValue(savedAssignmentListId || '');

      this.cdr.detectChanges();
    }, 0);
  }

  filterTaskForm: FormGroup = this.fb.group({
    assignmentListId: ['', [Validators.required]],
  });

  ngOnDestroy(): void {
    this.taskListSubscription.unsubscribe();
  }


  hasAssignmentListIdError() {
    return this.isInvalid('assignmentListId', 'required');
  }

  clearFilter() {
    this.sharedDataTaskList.setClearFilter();
  }

  filterTasks() {
    this.isLoading = true;
    let payload: ItaskListFilter = this.filterTaskForm.value;
    if (this.filterTaskForm.valid && this.isFiltered) {
      this.taskListService.getTaskListById(payload.assignmentListId).subscribe(
        (response) => {
          this.sharedDataTaskList.setTaskData(response);
          this.isLoading = false;
        },
        (error) => {
          const { erros } = error.error;
          Swal.fire({
            position: 'center',
            icon: 'error',
            title: erros,
            showConfirmButton: true,
          });
          this.isLoading = false;
        }
      );
    }

    this.formStateService.saveFormState(
      'filterTaskForm',
      this.filterTaskForm.value
    );
  }

  isInvalid(inputName: string, validatorName: string) {
    const formControl: any = this.filterTaskForm.get(inputName);
    if (formControl.errors !== null) {
      return (
        formControl.errors[validatorName] &&
        this.filterTaskForm.get(inputName)?.touched
      );
    }
  }
}

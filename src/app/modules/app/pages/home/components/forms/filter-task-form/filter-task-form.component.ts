import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskListService } from 'src/app/modules/app/services';
import { ItaskListFilter } from 'src/app/modules/app/types';

@Component({
  selector: 'td-filter-task-form',
  templateUrl: './filter-task-form.component.html',
  styleUrls: ['./filter-task-form.component.scss'],
})
export class FilterTaskFormComponent implements AfterViewInit {
  listTasks: any[] = [];
  filterTaskForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private taskListService: TaskListService
  ) {}

  ngAfterViewInit(): void {
    this.taskListService.getTaskList().subscribe((response) => {
      const { items } = response;
      this.listTasks = items;
    });

    this.initializeForm();
  }

  private initializeForm(): void {
    this.filterTaskForm = this.fb.group({
      // name: ['', [Validators.required]],
      assignmentListId: ['', [Validators.required]],
    });
  }

  filterTasks() {
    let payload: ItaskListFilter = this.filterTaskForm.value;
    if (this.filterTaskForm.valid) {
      this.taskListService.getTaskListById(payload.assignmentList).subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
    }
  }
}

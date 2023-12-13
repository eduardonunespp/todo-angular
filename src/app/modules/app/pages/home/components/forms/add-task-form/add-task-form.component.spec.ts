import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskFormComponent } from './add-task-form.component';

describe('AddTaskFormComponent', () => {
  let component: AddTaskFormComponent;
  let fixture: ComponentFixture<AddTaskFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddTaskFormComponent]
    });
    fixture = TestBed.createComponent(AddTaskFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcludeTaskModalComponent } from './conclude-task-modal.component';

describe('ConcludeTaskModalComponent', () => {
  let component: ConcludeTaskModalComponent;
  let fixture: ComponentFixture<ConcludeTaskModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConcludeTaskModalComponent]
    });
    fixture = TestBed.createComponent(ConcludeTaskModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnconcludeTaskModalComponent } from './unconclude-task-modal.component';

describe('UnconcludeTaskModalComponent', () => {
  let component: UnconcludeTaskModalComponent;
  let fixture: ComponentFixture<UnconcludeTaskModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnconcludeTaskModalComponent]
    });
    fixture = TestBed.createComponent(UnconcludeTaskModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

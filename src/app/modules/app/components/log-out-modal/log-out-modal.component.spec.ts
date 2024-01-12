import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogOutModalComponent } from './log-out-modal.component';

describe('LogOutModalComponent', () => {
  let component: LogOutModalComponent;
  let fixture: ComponentFixture<LogOutModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogOutModalComponent]
    });
    fixture = TestBed.createComponent(LogOutModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

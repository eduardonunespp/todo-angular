import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonTaskSideComponent } from './button-side.component';

describe('ButtonTaskSideComponent', () => {
  let component: ButtonTaskSideComponent;
  let fixture: ComponentFixture<ButtonTaskSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonTaskSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonTaskSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

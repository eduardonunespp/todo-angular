import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSideComponent } from './button-side.component';

describe('ButtonSideComponent', () => {
  let component: ButtonSideComponent;
  let fixture: ComponentFixture<ButtonSideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonSideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

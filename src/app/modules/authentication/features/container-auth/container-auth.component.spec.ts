import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerAuthComponent } from './container-auth.component';

describe('ContainerAuthComponent', () => {
  let component: ContainerAuthComponent;
  let fixture: ComponentFixture<ContainerAuthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerAuthComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

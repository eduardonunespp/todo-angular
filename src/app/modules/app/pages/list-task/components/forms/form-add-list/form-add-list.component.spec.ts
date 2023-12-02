import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddListComponent } from './form-add-list.component';

describe('FormAddListComponent', () => {
  let component: FormAddListComponent;
  let fixture: ComponentFixture<FormAddListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAddListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormAddListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

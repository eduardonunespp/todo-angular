import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEditListComponent } from './form-edit-list.component';

describe('FormEditListComponent', () => {
  let component: FormEditListComponent;
  let fixture: ComponentFixture<FormEditListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEditListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormEditListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

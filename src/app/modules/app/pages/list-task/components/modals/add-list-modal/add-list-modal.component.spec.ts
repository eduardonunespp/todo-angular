import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListModalComponent } from './add-list-modal.component';

describe('AddListModalComponent', () => {
  let component: AddListModalComponent;
  let fixture: ComponentFixture<AddListModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddListModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

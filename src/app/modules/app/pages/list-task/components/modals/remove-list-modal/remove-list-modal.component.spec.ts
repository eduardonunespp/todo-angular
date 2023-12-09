import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoveListModalComponent } from './remove-list-modal.component';

describe('RemoveListModalComponent', () => {
  let component: RemoveListModalComponent;
  let fixture: ComponentFixture<RemoveListModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoveListModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemoveListModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

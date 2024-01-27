import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSideComponent } from './button-side.component';
import { By } from '@angular/platform-browser';

describe('ButtonSideComponent', () => {
  let component: ButtonSideComponent;
  let fixture: ComponentFixture<ButtonSideComponent>;
  let nativeElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ButtonSideComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonSideComponent);
    component = fixture.componentInstance;
    nativeElement = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should text in description', () => {
    component.description = 'Test description';
    component.isActivedSide = true;

    fixture.detectChanges();

    const pElement = nativeElement.querySelector('p');

    expect(pElement).toBeTruthy();

    expect(component.description).toEqual('Test description');

    expect(pElement?.textContent).toEqual(component.description);
  });

  it('should not render <p> when isActivedSide is false', () => {
    component.isActivedSide = false;

    fixture.detectChanges();

    const pElement = nativeElement.querySelector('p');

    expect(pElement).toBeFalsy();
  });

  it('click event should be emitted when the button is clicked', () => {
    const myEmitSpy = jest.spyOn(component.activedButtonChangeHome, 'emit');
    const myEventSpy = jest.spyOn(component, 'handleActiveButton')

    fixture.detectChanges();

    fixture.debugElement.query(By.css('button')).triggerEventHandler('click', null);

    expect(myEventSpy).toHaveBeenCalled();

    expect(myEmitSpy).toHaveBeenCalledWith(true);
  });
});

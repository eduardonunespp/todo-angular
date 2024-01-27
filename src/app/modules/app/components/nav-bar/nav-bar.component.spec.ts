import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
  waitForAsync,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NavBarComponent } from './nav-bar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { NgOptimizedImage } from '@angular/common';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarComponent],
      imports: [MatDialogModule, NgOptimizedImage],
    });
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have the 'assets/todo-logo.svg' logoTodoSide`, () => {
    expect(component.logoTodoSide).toEqual('assets/todo-logo.svg');
  });

  it(`should have the 'assets/logOut-icon.svg' logOutTodoIcon`, () => {
    expect(component.logOutTodoIcon).toEqual('assets/logOut-icon.svg');
  });

  it('should render img logoTodoSide with correct ngSrc', waitForAsync(
    fakeAsync(() => {
      fixture.detectChanges();

      const imgElement = fixture.debugElement.query(
        By.css('img[data-test-img-1="logOutTodoIcon"]')
      ).nativeElement;

      const onLoad = () => {
        const ngSrcValue = imgElement.getAttribute('ngSrc');
        expect(ngSrcValue).toBe(component.logOutTodoIcon);
        fixture.destroy();
      };

      imgElement.addEventListener('load', onLoad);

      if (imgElement.complete) {
        onLoad();
      }

      tick();

      fixture.whenStable().then(() => {
        imgElement.removeEventListener('load', onLoad);
      });
    })
  ));

  it('should render img logoTodoSIde with correct ngSrc', waitForAsync(
    fakeAsync(() => {
      fixture.detectChanges();

      const imgElement = fixture.debugElement.query(
        By.css('img[data-test-img-2="logoTodoSide"]')
      ).nativeElement;

      const onLoad = () => {
        const ngSrcValue = imgElement.getAttribute('ngSrc');
        expect(ngSrcValue).toBe(component.logOutTodoIcon);
        fixture.destroy();
      };

      imgElement.addEventListener('load', onLoad);

      if (imgElement.complete) {
        onLoad();
      }

      tick();

      fixture.whenStable().then(() => {
        imgElement.removeEventListener('load', onLoad);
      });
    })
  ));

  
});

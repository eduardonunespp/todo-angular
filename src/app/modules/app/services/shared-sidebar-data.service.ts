import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedSidebarDataService {
  isActivedSide: boolean = false;
  isActivedButtonHome: boolean = true;
  isActivedButtonTask: boolean = false;
}

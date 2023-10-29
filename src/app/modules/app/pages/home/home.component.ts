import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  isActivedSide: boolean = false

  activedSide(isActive: boolean){
    this.isActivedSide = isActive
  }

}

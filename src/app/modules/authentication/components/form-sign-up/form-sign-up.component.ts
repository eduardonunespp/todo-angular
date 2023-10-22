import { Component, Input } from '@angular/core';

@Component({
  selector: 'td-form-sign-up',
  templateUrl: './form-sign-up.component.html',
  styleUrls: ['./form-sign-up.component.scss']
})
export class FormSignUpComponent {

  @Input() title: string = ''

}

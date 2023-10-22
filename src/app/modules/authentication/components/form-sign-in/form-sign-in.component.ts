import { Component, Input } from '@angular/core';

@Component({
  selector: 'td-form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrls: ['./form-sign-in.component.scss']
})
export class FormSignInComponent {
  @Input() title: string = ''
}

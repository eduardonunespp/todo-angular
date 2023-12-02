import { Component, Input } from '@angular/core';

@Component({
  selector: 'td-generic-modal',
  templateUrl: './generic-modal.component.html',
  styleUrls: ['./generic-modal.component.scss']
})
export class GenericModalComponent {

  @Input() headerTemplate: any
  @Input() bodyTemplate: any
  @Input() footerTemplate: any

}

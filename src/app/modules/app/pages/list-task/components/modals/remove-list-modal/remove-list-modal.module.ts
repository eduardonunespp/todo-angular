import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RemoveListModalComponent } from './remove-list-modal.component';
import { DeleteIconModule } from 'src/app/shared/Icons'
import { SipnnerModule } from 'src/app/shared/components';

@NgModule({
  declarations: [RemoveListModalComponent],
  imports: [CommonModule, DeleteIconModule, SipnnerModule],
  exports: [RemoveListModalComponent]
})
export class RemoveListModalModule {}

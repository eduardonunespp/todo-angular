import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ModalModule } from '../../components'
import { GenericModalModule } from '../../components/generic-modal/generic-modal.module';
import { AddListModalComponent } from '../../pages/list-task/components/modals/add-list-modal/add-list-modal.component';
import { AddListModalModule } from '../../pages/list-task/components/modals/add-list-modal/add-list-modal.module';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NgOptimizedImage,
    AddListModalModule,
    GenericModalModule,
    MatDialogModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }

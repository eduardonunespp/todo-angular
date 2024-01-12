import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SideBarComponent } from './side-bar.component';
import { ButtonSideModule } from '../../components';
import { ButtonTaskSideModule } from '../../components/button-side-task/button-side.module';
import { LogOutModalModule } from '../../components/log-out-modal/log-out-modal.module';

@NgModule({
  declarations: [SideBarComponent],
  imports: [
    CommonModule,
    NgOptimizedImage,
    ButtonSideModule,
    ButtonTaskSideModule,
    LogOutModalModule,
  ],
  exports: [SideBarComponent],
})
export class SideBarModule {}

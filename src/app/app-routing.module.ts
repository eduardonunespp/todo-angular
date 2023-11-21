import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from './guards/authorized.guard';

const routes: Routes = [
  // {
  //   path: '**',
  //   redirectTo: '/home',
  // },
  {
    path: '',
    loadChildren: () =>
      import('./modules/authentication/pages/sign-in/sign-in.module').then(
        (m) => m.SignInModule
      ),
  },
  {
    path: 'sign-up',
    loadChildren: () =>
      import('./modules/authentication/pages/sign-up/sign-up.module').then(
        (m) => m.SignUpModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/app/pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'list',
    loadChildren: () =>
      import('./modules/app/pages/list-task/list-task.module').then(
        (m) => m.ListTaskModule
      ),
    canActivate: [AuthorizedGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

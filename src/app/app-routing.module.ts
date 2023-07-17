import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //lazy loading
  // {
  //   path: 'profile-details',
  //   loadChildren: () =>
  //     import('./profile-details/profile-details.module').then(
  //       (m) => m.ProfileDetailsModule
  //     ),
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

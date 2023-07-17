import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectAccountComponent } from './components/common/select-account/select-account.component';
import { ProfileDetailsContainerComponent } from './profile-details-container/profile-details-container.component';
import { ProfileComponent } from './components/common/profile/profile.component';
import { PostsComponent } from './components/common/posts/posts.component';
import { GalleryComponent } from './components/common/gallery/gallery.component';
import { TodoComponent } from './components/common/todo/todo.component';

const routes: Routes = [
  // profile details page routing here...

  {
    path: 'select-account',
    component: SelectAccountComponent
  },
  {
    path: '',
    component: ProfileDetailsContainerComponent,
    children: [
    {
        path: 'profile',
        component: ProfileComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'gallery',
        component: GalleryComponent
      },
      {
        path: 'todo',
        component: TodoComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'select-account',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'select-account'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileDetailsRoutingModule { }

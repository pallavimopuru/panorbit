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
    path: 'panorbit/select-account',
    component: SelectAccountComponent
  },
  {
    path: 'panorbit',
    component: ProfileDetailsContainerComponent,
    children: [
    {
        path: 'profile',
        component: ProfileComponent,data: { pageTitle: 'Profile' } 
      },
      {
        path: 'posts',
        component: PostsComponent,data: { pageTitle: 'Posts' } 
      },
      {
        path: 'gallery',
        component: GalleryComponent,data: { pageTitle: 'Gallery' } 
      },
      {
        path: 'todo',
        component: TodoComponent,data: { pageTitle: 'Todo' } 
      }
    ]
  },
  {
    path: '',
    redirectTo: 'panorbit/select-account',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'panorbit/select-account'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileDetailsRoutingModule { }

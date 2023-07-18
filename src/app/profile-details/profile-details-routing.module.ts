import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectAccountComponent } from './components/common/select-account/select-account.component';
import { ProfileDetailsContainerComponent } from './profile-details-container/profile-details-container.component';
import { ProfileComponent } from './components/common/profile/profile.component';
import { PostsComponent } from './components/common/posts/posts.component';
import { GalleryComponent } from './components/common/gallery/gallery.component';
import { TodoComponent } from './components/common/todo/todo.component';

const routes: Routes = [

  {
    path: '',
    component: ProfileDetailsContainerComponent,
    children: [
    
      {
        path: 'panorbit/profile',
        component: ProfileComponent,
        data: { pageTitle: 'Profile' }
      },
      {
        path: 'panorbit/posts',
        component: PostsComponent,
        data: { pageTitle: 'Posts' }
      },
      {
        path: 'panorbit/gallery',
        component: GalleryComponent,
        data: { pageTitle: 'Gallery' }
      },
      {
        path: 'panorbit/todo',
        component: TodoComponent,
        data: { pageTitle: 'Todo' }
      }
    ]
  },
  {
    path: 'select-account',
    component: SelectAccountComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'select-account'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'select-account'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileDetailsRoutingModule { }

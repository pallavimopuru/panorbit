import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileDetailsRoutingModule } from './profile-details-routing.module';

import { ProfileDetailsContainerComponent } from './profile-details-container/profile-details-container.component';
import { FormsModule } from '@angular/forms';
import { SelectAccountComponent } from './components/common/select-account/select-account.component';
import { ProfileComponent } from './components/common/profile/profile.component';
import { PostsComponent } from './components/common/posts/posts.component';
import { GalleryComponent } from './components/common/gallery/gallery.component';
import { TodoComponent } from './components/common/todo/todo.component';


@NgModule({
  declarations: [
SelectAccountComponent,
    ProfileDetailsContainerComponent,
    ProfileComponent,
    PostsComponent,
    GalleryComponent,
    TodoComponent
  ],
  imports: [
    CommonModule,
    ProfileDetailsRoutingModule,
    FormsModule
  ]
})
export class ProfileDetailsModule { }

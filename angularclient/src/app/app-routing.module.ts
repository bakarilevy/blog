import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from '../app/post-list/post-list.component';
import { PostFormComponent } from '../app/post-form/post-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';
import { SearchFormComponent } from '../app/search-form/search-form.component';
import { PostDetailsComponent } from '../app/post-details/post-details.component';

const routes: Routes = [
  {path: 'posts', component: PostListComponent},
  {path: 'addPost', component: PostFormComponent},
  {path: 'blog/:id', component: PostListComponent},
  {path: 'editPost', component: EditFormComponent},
  {path: 'searchPosts', component: SearchFormComponent},
  {path: 'details/:id', component: PostDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

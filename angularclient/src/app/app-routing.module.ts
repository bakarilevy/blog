import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from '../app/post-list/post-list.component';
import { PostFormComponent } from '../app/post-form/post-form.component';
import { EditFormComponent } from './edit-form/edit-form.component';

const routes: Routes = [
  {path: 'posts', component: PostListComponent},
  {path: 'addPost', component: PostFormComponent},
  {path: 'blog/:id', component: PostListComponent},
  {path: 'editPost', component: EditFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

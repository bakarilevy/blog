import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EditFormComponent } from '../edit-form/edit-form.component';
import {AppComponent } from '../app.component';
import { PostDetailsComponent } from '../post-details/post-details.component';
import { PostFormComponent } from '../post-form/post-form.component';
import { SearchFormComponent } from '../search-form/search-form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { PostListComponent } from '../post-list/post-list.component';
import { PostService } from '../post.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PostFormComponent', () => {
  let component: PostFormComponent;
  let fixture: ComponentFixture<PostFormComponent>;

  const routes: Routes = [
    {path: 'posts', component: PostListComponent},
    {path: 'addPost', component: PostFormComponent},
    {path: 'blog/:id', component: PostListComponent},
    {path: 'editPost', component: EditFormComponent},
    {path: 'searchPosts', component: SearchFormComponent},
    {path: 'details/:id', component: PostDetailsComponent},
  ];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        RouterModule.forRoot(routes),
        FormsModule,
        HttpClientTestingModule,
      ],
      declarations: [ 
        PostListComponent,
        AppComponent,
        PostDetailsComponent,
        PostFormComponent,
        SearchFormComponent,
        EditFormComponent,
        PostListComponent,
       ],

       providers: [
        PostService
      ]
    })

//  beforeEach(async(() => {
//    TestBed.configureTestingModule({
//     declarations: [ PostFormComponent ]
//    })
//    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

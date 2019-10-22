import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { PostListComponent } from './post-list.component';
import {AppComponent } from '../app.component';
import { PostDetailsComponent } from '../post-details/post-details.component';
import { PostFormComponent } from '../post-form/post-form.component';
import { SearchFormComponent } from '../search-form/search-form.component';
import { EditFormComponent } from '../edit-form/edit-form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { PostService } from '../post.service';

describe('PostListComponent', () => {
  let component: PostListComponent;
  let fixture: ComponentFixture<PostListComponent>;

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
        HttpClientTestingModule,
        RouterTestingModule,
        RouterModule.forRoot(routes),
        FormsModule
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
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

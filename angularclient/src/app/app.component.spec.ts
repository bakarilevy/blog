import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AppComponent } from './app.component';
import { PostListComponent } from '../app/post-list/post-list.component';
import { PostFormComponent } from '../app/post-form/post-form.component';
import { EditFormComponent } from '../app/edit-form/edit-form.component';
import { SearchFormComponent } from '../app/search-form/search-form.component';
import { PostDetailsComponent } from '../app/post-details/post-details.component';


describe('AppComponent', () => {
  
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
        RouterModule.forRoot(routes)
      ],
      declarations: [
        AppComponent,
        PostDetailsComponent,
        PostFormComponent,
        SearchFormComponent,
        EditFormComponent,
        PostListComponent,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Blog: MySQL, Spring, Angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Blog: MySQL, Spring, Angular');
  });

//  it('should render title', () => {
//    const fixture = TestBed.createComponent(AppComponent);
//    fixture.detectChanges();
//    const compiled = fixture.debugElement.nativeElement;
//    expect(compiled.querySelector('.content span').textContent).toContain('angularclient app is running!');
//  });
});

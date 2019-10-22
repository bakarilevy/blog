import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PostDetailsComponent } from './post-details.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClientModule} from '@angular/common/http';
import { PostListComponent } from '../post-list/post-list.component';
import {AppComponent } from '../app.component';
import { PostFormComponent } from '../post-form/post-form.component';
import { SearchFormComponent } from '../search-form/search-form.component';
import { EditFormComponent } from '../edit-form/edit-form.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { PostService } from '../post.service';
import { Post } from '../post';
import { Observable } from 'rxjs';

describe('PostDetailsComponent', () => {
  let component: PostDetailsComponent;
  let fixture: ComponentFixture<PostDetailsComponent>;

  class FakeService {

    getPostOnLoad() {
      return new Observable;
    }
  }

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
      //  RouterModule.forRoot(routes),
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
         { provide: PostService, useClass: FakeService }
       ]
    })
    .compileComponents();
  }));

 // beforeEach(async(() => {
 //   TestBed.configureTestingModule({
 //     declarations: [ PostDetailsComponent ]
 //   })
//  .compileComponents();
//  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

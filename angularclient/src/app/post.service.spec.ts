import { async, ComponentFixture, TestBed, getTestBed } from '@angular/core/testing';
import { PostService } from './post.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { Post } from './post';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('PostService', () => {
  //Test this service

  let service: PostService;
  let httpMock: HttpTestingController;
  let post: Post = new Post;
  

  
  beforeEach(async(() => {
  
    TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [
      PostService
    ]
  })
  .compileComponents();
  }));
  


beforeEach(() => {
  service = TestBed.get(PostService);
})


  //beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    
    expect(service).toBeTruthy();
  });

  it('Post should not be null', () => {
    post.setTitle("foo");
    post.setContent("bar");
    service.setPost(post)
    let check = service.getPost();
    expect(check).toBeTruthy();
  });

});

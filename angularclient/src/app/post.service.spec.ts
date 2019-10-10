import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PostService } from './post.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { Post } from './post';

describe('PostService', () => {
  //Test this service
  let service: PostService;
  let fixture: ComponentFixture<PostService>;
  let post: Post = new Post;
  const fakeRouter = {
    request: 'Some Other Page'
  };
  const fakeHttpClient = {
    get: 'someUrl'
  }
  
  beforeEach(async(() => {
  
    TestBed.configureTestingModule({
    declarations: [ PostService ],
    imports: [
      HttpClientTestingModule,
      RouterTestingModule,
      FormsModule
    ],
    providers: [
      {PostService},
      {provide: RouterTestingModule, useValue: fakeRouter },
      {provide: HttpClientTestingModule, useValue: fakeHttpClient }
    ]
  })
  .compileComponents();
}));

beforeEach(() => {
  fixture = TestBed.createComponent(PostService);
  service = fixture.componentInstance;
  fixture.detectChanges();
});

  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PostService = TestBed.get(PostService);
    expect(service).toBeTruthy();
  });

  it('Post should not be null', () => {
    const service: PostService = TestBed.get(PostService);
    post.setTitle("foo");
    post.setContent("bar");
    service.setPost(post)
    let check = service.getPost();
    expect(check).toBeTruthy();
  });

});

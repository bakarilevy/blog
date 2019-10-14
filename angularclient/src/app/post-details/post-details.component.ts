import { Component, OnInit, NgModule } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { Comment } from '../comment';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})

@NgModule({
  imports: [
    FormsModule
  ]
})

export class PostDetailsComponent implements OnInit {
  post: Post;
  comments: Comment[];
  comment: Comment;
  postId: string;
  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router ) {
    this.comment = new Comment();
    // let test = new Comment;
    // test.setAuthor('Foo');
    // test.setReview('Bar');
    // this.comments = [test];
   }

  onSubmit() {
    //ALWAYS SUBSCRIBE! EVERY TIME YOU MAKE AN HTTP REQUEST!!!
    //ALWAYS SUBSCRIBE! EVERY TIME YOU MAKE AN HTTP REQUEST!!!
    //ALWAYS SUBSCRIBE! EVERY TIME YOU MAKE AN HTTP REQUEST!!!
    //ALWAYS SUBSCRIBE! EVERY TIME YOU MAKE AN HTTP REQUEST!!!
    //ALWAYS SUBSCRIBE! EVERY TIME YOU MAKE AN HTTP REQUEST!!!
    //ALWAYS SUBSCRIBE! EVERY TIME YOU MAKE AN HTTP REQUEST!!!
    //ALWAYS SUBSCRIBE! EVERY TIME YOU MAKE AN HTTP REQUEST!!!
    this.postService.sendComment(this.postId, this.comment).subscribe(result => {
      window.location.reload();
    });
    //ALWAYS SUBSCRIBE! EVERY TIME YOU MAKE AN HTTP REQUEST!!!
    //ALWAYS SUBSCRIBE! EVERY TIME YOU MAKE AN HTTP REQUEST!!!
    //ALWAYS SUBSCRIBE! EVERY TIME YOU MAKE AN HTTP REQUEST!!!
    //ALWAYS SUBSCRIBE! EVERY TIME YOU MAKE AN HTTP REQUEST!!!
    //ALWAYS SUBSCRIBE! EVERY TIME YOU MAKE AN HTTP REQUEST!!!
    //ALWAYS SUBSCRIBE! EVERY TIME YOU MAKE AN HTTP REQUEST!!!
    //ALWAYS SUBSCRIBE! EVERY TIME YOU MAKE AN HTTP REQUEST!!!
    
  }

  ngOnInit() {
    this.postId = this.route.snapshot.paramMap.get('id');
    this.postService.getPostOnLoad(this.postId).subscribe(data => {
      this.post = data;
      this.comments = this.post.comments;
    } ); 
  }


}

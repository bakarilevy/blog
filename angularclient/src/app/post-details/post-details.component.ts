import { Component, OnInit, NgModule } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { Comment } from '../comment';
import { FormsModule }   from '@angular/forms';


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
  constructor(private postService: PostService) {
    this.comment = new Comment();
   }

  onSubmit() {

    //Need to send this across to the back end as well as make this work far more elegantly
    this.comments.push(this.comment);
    this.post.comments = this.comments;
  }

  ngOnInit() {
    this.post = this.postService.getPost();
    this.comments = this.post.comments;
  }

}

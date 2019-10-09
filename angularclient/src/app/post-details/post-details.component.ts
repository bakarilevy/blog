import { Component, OnInit } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { Comment } from '../comment';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  post: Post;
  comments: Comment[];
  comment: Comment;
  constructor(private postService: PostService) {
    this.comment = new Comment();
   }

  onSubmit() {

    //Need to send this across as well and make this work far more elegantly
    this.comments.push(this.comment);
    this.post.comments = this.comments;
  }

  ngOnInit() {
    this.post = this.postService.getPost();
    this.comments = this.post.comments;
  }

}

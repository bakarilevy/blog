import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {

  post: Post;

  constructor(private route: ActivatedRoute, private router: Router, private postService: PostService) {
    this.post = new Post();
   }

   onSubmit() {
     this.postService.save(this.post).subscribe(result => this.goToPostList());
   }

   goToPostList() {
     this.router.navigate(['/posts']);
   }

  ngOnInit() {
  }

}

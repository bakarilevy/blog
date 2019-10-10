import { Component, OnInit, NgModule } from '@angular/core';
import { Post } from '../post';
import { PostService } from '../post.service';
import { Router } from '@angular/router';
import { FormsModule }   from '@angular/forms';


@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

@NgModule({
  imports: [
    FormsModule
  ]
})

export class PostListComponent implements OnInit {

  posts: Post[];
 

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {

    this.postService.findAll().subscribe(data =>{
      this.posts = data;
    })

  }


  redirectToPosts(){

    this.router.navigate(['/posts']);

  }

  detailsOfPost(post: Post) {
    this.postService.setPost(post);
  }

  redirectToEdit() {
    //Takes the person to the edit form page
    this.router.navigate(['/editPost']);
  }

  delPost(id: string) {
  
    this.postService.setId(id);
    this.postService.deletePost().subscribe( posts => this.redirectToPosts());

  }

  editPost(post: Post) {

    this.postService.setPost(post);
    this.redirectToEdit();
    
    //need to get the post first then go into the form
   // this.postService.editPost(id).subscribe( posts => this.redirectToEdit());

  }

}

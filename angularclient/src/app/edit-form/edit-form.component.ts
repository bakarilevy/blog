import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PostService } from '../post.service';
import { Post } from '../post';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css'],
})
export class EditFormComponent implements OnInit {

  post: Post;
  title: String;
  contents: String;
  titleValue = '';
  contentValue = '';

  constructor(private route: ActivatedRoute, private router: Router, private postService: PostService ) { }

//Maybe put the template coments into the edit form component!

  onSubmit() {
    //Need to find a way to pass in contents of the form into the function
    this.postService.editPost(this.titleValue, this.contentValue).subscribe(result => this.goToPostList());
  }

  goToPostList() {
    this.router.navigate(['/posts']);
  }

  onTitleKeyEnter(value: String) {
    this.titleValue += value;
  }

  onContentKeyEnter(value: String) {
    this.contentValue += value;
  }

  setId(id: number) {
      this.postService.setId(id);
  }

  ngOnInit() {
    this.post = this.postService.getPost();
  }

}

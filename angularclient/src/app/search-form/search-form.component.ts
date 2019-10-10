import { Component, OnInit, NgModule } from '@angular/core';
import { PostService } from '../post.service';
import { Search } from '../search';
import { Post } from '../post';
import { FormsModule }   from '@angular/forms';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})

@NgModule({
  imports: [
    FormsModule
  ]
})

export class SearchFormComponent implements OnInit {

   search: Search;
   searchResults: Post[];

  constructor(private postService : PostService) {
  
    this.search = new Search();
   }

  detailsOfPost(post: Post) {
    this.postService.setPost(post);
  }

  onSearch(){
    this.postService.searchPost(this.search.getQuery()).subscribe(data => {this.searchResults = data});
  }


  ngOnInit() {
  }

}

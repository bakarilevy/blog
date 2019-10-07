import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Search } from '../search';
import { Post } from '../post';
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
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

  onSubmit(){
    
    this.postService.searchPost(this.search.getQuery());
    this.searchResults = this.postService.getSearchResults();
  }

  ngOnInit() {
  }

}

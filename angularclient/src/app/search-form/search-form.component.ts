import { Component, OnInit } from '@angular/core';
import { PostService } from '../post.service';
import { Search } from '../search';
@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

   search: Search;
   data: string;

  constructor(private postService : PostService) {
  
    this.search = new Search();
   }

  //Now this form needs to display the results on this page...

  onSubmit(){
    this.data = "Test";
    this.postService.searchPost(this.search.getQuery())
  }

  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Post } from '../app/post';
import { Observable, fromEventPattern } from 'rxjs';
import { map } from 'rxjs/operators';
import {ActivatedRoute, Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class PostService {

  private postsUrl: string;
  private id: number;
  private post: Post;
  private editedPost = new Post;

  getId(){
    return this.id;
  }

  setId(id){
    this.id = id;
  }

  getPost(){
    return this.post;
  }

  setPost(post){
    this.post = post;
  }


  constructor(private http: HttpClient, activatedRoute: ActivatedRoute, router: Router) {
    this.postsUrl = 'http://localhost:8080/blog';
   }

   public findAll(): Observable<Post[]> {
     return this.http.get<Post[]>(this.postsUrl);
   }

   public save(post: Post){
     return this.http.post<Post>(this.postsUrl, post);
   }

  public fetchPost(id: String): Observable<Post> {
    return this.http.get<Post>(this.postsUrl + "/" + this.id); 
  }

  public deletePost() {
    return this.http.delete<Post>(this.postsUrl + "/" + this.id);
  }

  public searchPost(query: String){
   const options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
    let url = this.postsUrl + "/search";
    let sendThis = { title: query };
    let request = this.http.post<Post[]>(url, sendThis, options); 
    return request;
  }

  public convertSearchResults() {
    //Maybe instead of converting into have a way to explicitly render the search Response
  }

  public editPost(title: String, content: String) {
    this.editedPost.setTitle(title);
    this.editedPost.setContent(content);
    return this.http.put<Post>(this.postsUrl + "/" + this.post.id, this.editedPost);
  }
}

package com.manifestcorp.Blog.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.manifestcorp.Blog.model.Comment;
import com.manifestcorp.Blog.model.Post;
import com.manifestcorp.Blog.repository.BlogRepository;

@RestController
@CrossOrigin(origins= "http://localhost:4200")
public class BlogController {
	
	@Autowired
	BlogRepository blogRepository;
	

	@RequestMapping("/blog")
	public List<Post> index() {
		return blogRepository.findAll();
	}
	
	@GetMapping("/blog/{id}")
	public Post show(@PathVariable String id) {
		int postId = Integer.parseInt(id);
		return blogRepository.findById(postId).get();
	}
	
	@PostMapping("/blog/search")
	public List<Post> search(@RequestBody Map<String, String> body) {
		String searchTerm = body.get("title");
		return blogRepository.findAllByTitle(searchTerm);
	}
	
	@PostMapping("/blog")
	public void create(@RequestBody Map<String, String> body) {
		String title = body.get("title");
		String content = body.get("content");
		blogRepository.save(new Post(title, content));
	}
	
	@PutMapping("/comment/{grabId}")
	public void newComment(@PathVariable String grabId, @RequestBody Map<String, String> body) {
		System.out.println("I got hit!");
		int id = Integer.parseInt(grabId);
		Post post = blogRepository.findById(id).get();
		Comment comment = new Comment();
		String author = body.get("author");
		String review = body.get("review");
		comment.setAuthor(author);
		comment.setReview(review);
		post.addComment(comment);
		blogRepository.save(post);
	}
	
	@PutMapping("/blog/{id}")
	public void update(@PathVariable String id, @RequestBody Map<String, String> body) {
		int postId = Integer.parseInt(id);
		//Getting blog post
		Post post = blogRepository.findById(postId).get();
		post.setTitle(body.get("title"));
		post.setContent(body.get("content"));
		blogRepository.save(post);
	}
	
	@DeleteMapping("/blog/{id}")
	public void delete(@PathVariable String id) {
		int postId = Integer.parseInt(id);
		blogRepository.deleteById(postId);
	}
}

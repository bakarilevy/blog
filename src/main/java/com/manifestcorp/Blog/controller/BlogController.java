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
import com.manifestcorp.Blog.service.BlogService;

@RestController
@CrossOrigin(origins= "http://localhost:4200")
public class BlogController {
	
	@Autowired
	BlogRepository blogRepository;
	@Autowired
	BlogService blogService;
	

	@RequestMapping("/blog")
	public List<Post> index() {
		return blogRepository.findAll();
	}
	
	@GetMapping("/blog/{id}")
	public Post show(@PathVariable String id) {
		return blogService.findOne(id);
	}
	
	@PostMapping("/blog/search")
	public List<Post> search(@RequestBody Map<String, String> body) {
		String searchTerm = body.get("title");
		return blogService.search(searchTerm);
	}
	
	@PostMapping("/blog")
	public void create(@RequestBody Map<String, String> body) {
		blogService.save(body);
	}
	
	@PutMapping("/comment/{grabId}")
	public void newComment(@PathVariable String grabId, @RequestBody Map<String, String> body) {
		blogService.newComment(grabId, body);
	}
	
	@PutMapping("/blog/{id}")
	public void update(@PathVariable String id, @RequestBody Map<String, String> body) {
		blogService.update(id, body);
	}
		
	@DeleteMapping("/blog/{id}")
	public void delete(@PathVariable String id) {
		blogService.delete(id);
	}
}

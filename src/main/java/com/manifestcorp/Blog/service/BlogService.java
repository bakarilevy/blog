package com.manifestcorp.Blog.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.manifestcorp.Blog.model.Comment;
import com.manifestcorp.Blog.model.Post;
import com.manifestcorp.Blog.repository.BlogRepository;

@Service
public class BlogService {

	
	@Autowired
	private BlogRepository blogRepository;
	private Map<String, String> body;
	
	public List<Post> findAll(){
		List<Post> results = blogRepository.findAll();
		return results;
	}
	
	public Post findOne(String id) {
		int postId = Integer.parseInt(id);
		Post result = blogRepository.findById(postId).get();
		return result;
	}
	
	public List<Post> search(String query) {
		List<Post> results = blogRepository.findAllByTitle(query);
		return results;
	}
	
	public void save(Map<String, String> body) {
		String title = body.get("title");
		String content = body.get("content");
		Post newPost = new Post();
		newPost.setTitle(title);
		newPost.setContent(content);
		blogRepository.save(newPost);
	}
	
	public void newComment(String searchId, Map<String, String> body) {
		int id = Integer.parseInt(searchId);
		Post post = blogRepository.findById(id).get();
		Comment comment = new Comment();
		String author = body.get("author");
		comment.setAuthor(author);
		String review = body.get("review");
		comment.setReview(review);
		post.addComment(comment);
		blogRepository.save(post);
	}
	
	public void update(String postId, Map<String, String> body) {
		int id = Integer.parseInt(postId);
		Post post = blogRepository.findById(id).get();
		String title = body.get("title");
		post.setTitle(title);
		String content = body.get("content");
		post.setContent(content);
		blogRepository.save(post);
	}
	
	public void delete(String postId) {
		int id = Integer.parseInt(postId);
		blogRepository.deleteById(id);
	}
}

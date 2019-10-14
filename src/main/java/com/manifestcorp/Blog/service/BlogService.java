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
	
	public void save(String title, String content) {
		Post newPost = new Post();
		newPost.setTitle(title);
		newPost.setContent(content);
		blogRepository.save(newPost);
	}
	
	public void newComment(String searchId, String author, String review) {
		int id = Integer.parseInt(searchId);
		Post post = blogRepository.findById(id).get();
		Comment comment = new Comment();
		comment.setAuthor(author);
		comment.setReview(review);
		post.addComment(comment);
		blogRepository.save(post);
	}
	
	public void update(String postId, String title, String content) {
		int id = Integer.parseInt(postId);
		Post post = blogRepository.findById(id).get();
		post.setTitle(title);
		post.setContent(content);
		blogRepository.save(post);
	}
	
	public void delete(String postId) {
		int id = Integer.parseInt(postId);
		blogRepository.deleteById(id);
	}
}

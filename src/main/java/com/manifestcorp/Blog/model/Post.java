package com.manifestcorp.Blog.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonProperty;

@Entity(name = "Post")
@Table(name = "post")

public class Post extends BaseEntity {
	
	private String title;
	
	//The One to many here is referring to the list of comments below.
	@OneToMany(
		mappedBy = "post",
		cascade = CascadeType.ALL,
		orphanRemoval = true
			)
	
	private List<Comment> comments = new ArrayList<Comment>();
	
	private String content;

	
	public Post() {}
	
	public Post( @JsonProperty("title") String title, @JsonProperty("content") String content) {
		this.title = title;
		this.content = content;
	}
	
	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public List<Comment> getComments() {
		return comments;
	}

	public void setComments(List<Comment> comments) {
		this.comments = comments;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}
	
	public void addComment(Comment comment) {
		comments.add(comment);
		comment.setPost(this);
	}
	
}

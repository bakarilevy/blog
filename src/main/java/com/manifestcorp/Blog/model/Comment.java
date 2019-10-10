package com.manifestcorp.Blog.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Entity(name = "Comment")
@Table(name = "comment")

public class Comment extends BaseEntity {

	@ManyToOne(fetch = FetchType.LAZY)
	private Post post;
	private String author;
	private String review;
	@JsonBackReference(value = "postToComments")
	
	public Post getPost() {
		return post;
	}

	public void setPost(Post post) {
		this.post = post;
	}

	public String getReview() {
		return review;
	}

	public void setReview(String review) {
		this.review = review;
	}

	public String getAuthor() {
		return author;
	}

	public void setAuthor(String author) {
		this.author = author;
	}

	
	
}

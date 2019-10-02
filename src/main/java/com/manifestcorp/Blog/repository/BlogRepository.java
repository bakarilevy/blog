package com.manifestcorp.Blog.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.manifestcorp.Blog.model.Post;

@Repository
public interface BlogRepository extends JpaRepository<Post, Integer> {

	//Custom query to search blog post by title or content
	List<Post> findByTitleContainingOrContentContaining(String text1, String text2);
}

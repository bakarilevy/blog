package com.manifestcorp.Blog.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.manifestcorp.Blog.model.Post;

@Repository
public interface BlogRepository extends JpaRepository<Post, Integer> {

	//Custom query to search blog post by title or content
//	List<Post> findByTitleContainingOrContentContaining(String text1, String text2);
	
	@Query("select p from Post p where p.title = :title or p.content = :content")
	Post findByTitleOrContent(@Param("title") String title, @Param("content") String content);
	
	@Query("select p from Post p where title like %:title%")
	List<Post> findAllByTitle(@Param("title") String title);
}

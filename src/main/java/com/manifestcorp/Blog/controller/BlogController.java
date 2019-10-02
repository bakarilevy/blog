package com.manifestcorp.Blog.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BlogController {
	
	@RequestMapping("/")
	public String index() {
		return "Congratulations you've hit the controller!";
	}

}

package dev.ashutosh.portfolio.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import dev.ashutosh.portfolio.entity.Projects;
import dev.ashutosh.portfolio.service.ProjectService;

@RestController
public class ProjectController {
	
	@Autowired
	private ProjectService pService;

	@GetMapping("/")
	public ResponseEntity<?> getAllProjects() {
		List<Projects> projectList = pService.getAllProjects();
		return ResponseEntity.ok(projectList);
	}
}



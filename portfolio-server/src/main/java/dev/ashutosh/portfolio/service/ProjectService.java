package dev.ashutosh.portfolio.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import dev.ashutosh.portfolio.entity.Projects;
import dev.ashutosh.portfolio.repository.ProjectRepository;

@Service
public class ProjectService {
	
	@Autowired
	private ProjectRepository pRepo;
	
	public List<Projects> getAllProjects(){
		return pRepo.findAll();
	}
}

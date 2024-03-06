package dev.ashutosh.portfolio.repository;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import dev.ashutosh.portfolio.entity.Projects;

@Repository
public interface ProjectRepository extends MongoRepository<Projects, ObjectId> {

}

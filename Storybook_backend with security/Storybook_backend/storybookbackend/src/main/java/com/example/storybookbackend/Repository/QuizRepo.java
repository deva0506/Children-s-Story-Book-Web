package com.example.storybookbackend.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.storybookbackend.Model.Quiz;

public interface QuizRepo extends JpaRepository<Quiz,Integer>{
    
}

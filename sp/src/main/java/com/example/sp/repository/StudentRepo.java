package com.example.sp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.sp.model.Student;

public interface StudentRepo extends JpaRepository<Student,Integer> {
  
}

package com.example.sp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.sp.model.Book;

public interface BookRepo extends JpaRepository<Book,Integer> {
  
}

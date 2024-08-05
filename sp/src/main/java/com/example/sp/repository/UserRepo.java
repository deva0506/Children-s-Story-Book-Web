package com.example.sp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.sp.model.User;

public interface UserRepo extends JpaRepository<User,Integer> {
  
}

package com.example.sp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.sp.model.Admin;

public interface AdminRepo extends JpaRepository<Admin,Integer> {
  
}

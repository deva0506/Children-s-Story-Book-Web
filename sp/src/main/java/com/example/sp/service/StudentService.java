package com.example.sp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sp.model.Student;
// import com.example.sp.model.User;
import com.example.sp.repository.StudentRepo;

@Service
public class StudentService {
     @Autowired
     StudentRepo str;
      public String addUser(Student stud){
      str.save(stud);
      return "Added";
   }
   public List<Student>getUser(){
        return str.findAll();
   }
   public Optional<Student>getUserById(int id){
    return str.findById(id);
   }
   public String updateUser(Student stud){
    str.save(stud);
    return "Updated";
   }
   public String deleteUser(int id){
    str.deleteById(id);
    return "Customer deleted";
   }
}

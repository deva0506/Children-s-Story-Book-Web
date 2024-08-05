package com.example.sp.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.sp.model.User;
import com.example.sp.repository.UserRepo;
@Service
public class UserService {
   @Autowired
   UserRepo us;
   public String addUser(User user){
      us.save(user);
      return "Added";
   }
   public List<User>getUser(){
        return us.findAll();
   }
   public Optional<User>getUserById(int id){
    return us.findById(id);
   }
   public String updateUser(User user){
    us.save(user);
    return "Updated";
   }
   public String deleteUser(int id){
    us.deleteById(id);
    return "Customer deleted";
   }
}

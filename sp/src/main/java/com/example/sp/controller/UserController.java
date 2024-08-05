package com.example.sp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.sp.model.User;
import com.example.sp.service.UserService;


@RestController
@RequestMapping("/user")
public class UserController {
    @Autowired
    UserService urs;
    @PostMapping("/insert")
    public String create(@RequestBody User user){
       return urs.addUser(user);
    }
    @GetMapping("/get")
    public List<User> read(){
      return urs.getUser();
    }
    @PutMapping("/update")
    public String update(@RequestBody User user){
      return urs.updateUser(user);
    }
    @DeleteMapping("/delete")
    public String delete(@RequestParam int id){
      return urs.deleteUser(id);
    }
}
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

import com.example.sp.model.Student;
import com.example.sp.service.StudentService;

@RestController
@RequestMapping("/student")
public class StudentController {
     @Autowired
     StudentService studentService;
     @PostMapping("/insert")
    public String create(@RequestBody Student user){
       return studentService.addUser(user);
    }
    @GetMapping("/get")
    public List<Student> read(){
      return studentService.getUser();
    }
    @PutMapping("/update")
    public String update(@RequestBody Student user){
      return studentService.updateUser(user);
    }
    @DeleteMapping("/delete")
    public String delete(@RequestParam int id){
      return studentService.deleteUser(id);
    }

}

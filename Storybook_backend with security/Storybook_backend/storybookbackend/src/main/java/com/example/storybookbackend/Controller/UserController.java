package com.example.storybookbackend.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.storybookbackend.Model.User;
import com.example.storybookbackend.Service.UserService;

@RestController
public class UserController {
    @Autowired
    UserService userDetailsService;

    //post
    @PostMapping("/adduser")
    public ResponseEntity<User> addUserData( @RequestBody User userDetails)
    {
        User ud=userDetailsService.createUserDetails(userDetails);
        return new ResponseEntity<>(ud,HttpStatus.CREATED);
    }
    //get
    @GetMapping("/getuserdata")
    public ResponseEntity<java.util.List<User>> showuserData()
    {
        return new ResponseEntity<>(userDetailsService.getUserDetails(),HttpStatus.OK);
    }

    //UPDATE
    @PutMapping("/putuserdata/{id}")
    public ResponseEntity<User> updateUserDetails(@PathVariable("id") int id,@RequestBody User userDetails )
    {   
        if(userDetailsService.updateUserDetails(id, userDetails)==true)
        {

            return new ResponseEntity<>(userDetails,HttpStatus.OK);
        }
        return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
    }

    //DELETE
    @DeleteMapping("/deleteuserdata/{id}")
    public ResponseEntity<Boolean> deleteuserdata(@PathVariable("id") int id)
    {
        if(userDetailsService.deleteUserDetails(id)==true)
        {
            return new ResponseEntity<>(true,HttpStatus.OK);
        }
        return new ResponseEntity<>(false,HttpStatus.NOT_FOUND);
    }
}

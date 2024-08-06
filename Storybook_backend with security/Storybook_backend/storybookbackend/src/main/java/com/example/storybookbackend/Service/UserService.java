package com.example.storybookbackend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.storybookbackend.Model.User;
import com.example.storybookbackend.Repository.UserRepo;

@Service
public class UserService {
    @Autowired
    UserRepo userDetailsRepo;

    //post and create 
    public User createUserDetails(User userDetails)
    {
        return userDetailsRepo.save(userDetails);
    }

    //get
    public List<User> getUserDetails()
    {
        return userDetailsRepo.findAll();
    }

    //get by id
    public User getUserById(int id)
    {
        return userDetailsRepo.findById(id).orElse(null);
    }

      //update or put
      public boolean updateUserDetails(int id,User userDetails)
      {
          if(this.getUserById(id)==null)
          {
              return false;
          }
          try{
              userDetailsRepo.save(userDetails);
          }
          catch(Exception e)
          {
              return false;
          }
          return true;
      }

    //delete
    public boolean deleteUserDetails(int id)
    {
        if(this.getUserById(id)==null)
        {
            return false;
        }
        userDetailsRepo.deleteById(id);
        return true;
    }
}

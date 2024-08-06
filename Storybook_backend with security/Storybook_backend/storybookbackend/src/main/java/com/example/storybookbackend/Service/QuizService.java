package com.example.storybookbackend.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.storybookbackend.Model.Quiz;
import com.example.storybookbackend.Repository.QuizRepo;


@Service
public class QuizService {
    @Autowired
    QuizRepo quizRepo;

    //post and create 
    public Quiz createQuizDetails(Quiz quiz)
    {
        return quizRepo.save(quiz);
    }

    //get
    public List<Quiz> getQuizDetails()
    {
        return quizRepo.findAll();
    }

    //get by id
    public Quiz getQuizById(int id)
    {
        return quizRepo.findById(id).orElse(null);
    }

      //update or put
      public boolean updateQuizDetails(int id,Quiz quiz)
      {
          if(this.getQuizById(id)==null)
          {
              return false;
          }
          try{
              quizRepo.save(quiz);
          }
          catch(Exception e)
          {
              return false;
          }
          return true;
      }

    //delete
    public boolean deleteQuizDetails(int id)
    {
        if(this.getQuizById(id)==null)
        {
            return false;
        }
        quizRepo.deleteById(id);
        return true;
    }
}

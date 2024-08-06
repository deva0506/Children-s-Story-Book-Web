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

import com.example.storybookbackend.Model.Quiz;
import com.example.storybookbackend.Service.QuizService;

@RestController
public class QuizController {
    @Autowired
    QuizService quizService;

    //post
    @PostMapping("/addquiz")
    public ResponseEntity<Quiz> addQuiz(@RequestBody Quiz quiz)
    {
        Quiz b=quizService.createQuizDetails(quiz);
        return new ResponseEntity<>(b,HttpStatus.CREATED);
    }

    //get
    @GetMapping("/getquizdata")
    public ResponseEntity<java.util.List<Quiz>> showQuizdetails()
    {
        return new ResponseEntity<>(quizService.getQuizDetails(),HttpStatus.OK);
    }

    //UPDATE
    @PutMapping("/putquizdata/{id}")
    public ResponseEntity<Quiz> updateQuizDetails(@PathVariable("id") int id,@RequestBody Quiz quiz )
    {   
        if(quizService.updateQuizDetails(id, quiz)==true)
        {

            return new ResponseEntity<>(quiz,HttpStatus.OK);
        }
        return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
    }

    //DELETE
    @DeleteMapping("/deletequizdata/{id}")
    public ResponseEntity<Boolean> deleteQuizdata(@PathVariable("id") int id)
    {
        if(quizService.deleteQuizDetails(id)==true)
        {
            return new ResponseEntity<>(true,HttpStatus.OK);
        }
        return new ResponseEntity<>(false,HttpStatus.NOT_FOUND);
    }
}

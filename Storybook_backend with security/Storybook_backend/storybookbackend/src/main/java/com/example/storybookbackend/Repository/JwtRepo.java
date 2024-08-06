package com.example.storybookbackend.Repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.example.storybookbackend.Model.Token;

public interface JwtRepo extends JpaRepository<Token,String>{
    List<Token> findAllByUser_UserIdAndExpiredFalseAndRevokedFalse(int userId);


    Optional<Token> findByToken(String token);
}

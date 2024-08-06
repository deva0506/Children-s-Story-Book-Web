package com.example.storybookbackend.Service;

import com.example.storybookbackend.dto.request.LoginRequest;
import com.example.storybookbackend.dto.request.RegisterRequest;
import com.example.storybookbackend.dto.response.LoginResponse;

public interface AuthService {
    String register(RegisterRequest registerRequest);

    LoginResponse login(LoginRequest loginRequest);

    String createAdmin();
}

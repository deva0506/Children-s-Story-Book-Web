import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function LoginPage() {
  const email = useRef(null);
  const password = useRef(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const [error, setError] = useState({
    email: false,
    emailInvalid: false,
    password: false,
    passwordInvalid: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    const emailValid = emailRegex.test(email.current.value);
    const passwordValid = passwordRegex.test(password.current.value);

    let newError = {
      email: !email.current.value || !emailValid,
      emailInvalid: email.current.value && !emailValid,
      password: !password.current.value || !passwordValid,
      passwordInvalid: password.current.value && !passwordValid
    };

    setError(newError);

    if (!newError.email && !newError.password && passwordValid && emailValid) {
      console.log("Email:", email.current.value);
      console.log("Password:", password.current.value);
      console.log("Form submitted");
      navigate("/home");
    }
  };

  return (
    <Container
      fixed
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh"
      }}
    >
      <Box
        component="form"
        width={500}
        height={400}
        display="flex"
        alignItems="center"
        justifyContent="center"
        sx={{
          "& > :not(style)": { m: 1, width: "45ch" },
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
          borderRadius: "25px",
          padding: "20px"
        }}
        onSubmit={handleSubmit}
      >
        <Typography sx={{ textAlign: "center" }} variant="h4">
          Login
        </Typography>
        <TextField
          inputRef={email}
          type="email"
          id="email"
          label="Email"
          variant="outlined"
          error={error.email || error.emailInvalid}
          helperText={
            error.email && !error.emailInvalid
              ? "Can't be Blank"
              : error.emailInvalid
              ? "Invalid Email Format"
              : ""
          }
          InputProps={{
            sx: { borderRadius: "10px", height: "5vh" }
          }}
        />
        <TextField
          inputRef={password}
          type="password"
          id="password"
          label="Password"
          variant="outlined"
          error={error.password || error.passwordInvalid}
          helperText={
            error.password && !error.passwordInvalid
              ? "Can't be Blank"
              : error.passwordInvalid
              ? "Password must be at least 8 characters long, contain letters, numbers, and symbols"
              : ""
          }
          InputProps={{
            sx: { borderRadius: "10px", height: "5vh" }
          }}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{
            borderRadius: "40px",
            backgroundColor: "#5704aa",
            color: "#faf6fa",
            textTransform: "capitalize",
            "&:hover": {
              backgroundColor: "#6a3ea1"
            }
          }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
}

export default LoginPage;

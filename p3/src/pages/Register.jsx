import React, { useRef, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate(); // Initialize useNavigate

  const fname = useRef(null);
  const lname = useRef(null);
  const phone = useRef(null);
  const password = useRef(null);
  const cpassword = useRef(null);
  const email = useRef(null);

  const [error, setError] = useState({
    fname: false,
    lname: false,
    phone: false,
    password: false,
    cpassword: false,
    email: false,
    emailInvalid: false,
    passwordMismatch: false,
    phoneInvalid: false,
    passwordInvalid: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+\d{1,3}\d{10}$/;
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailValid = emailRegex.test(email.current.value);
    const phoneValid = phoneRegex.test(phone.current.value);
    const passwordsMatch = password.current.value === cpassword.current.value;
    const passwordValid = passwordRegex.test(password.current.value);

    let newError = {
      fname: !fname.current.value,
      lname: !lname.current.value,
      phone: !phone.current.value || !phoneValid,
      password: !password.current.value || !passwordValid,
      cpassword: !cpassword.current.value,
      email: !email.current.value || !emailValid,
      emailInvalid: email.current.value && !emailValid,
      passwordMismatch: !passwordsMatch,
      phoneInvalid: phone.current.value && !phoneValid,
      passwordInvalid: password.current.value && !passwordValid
    };

    setError(newError);

    if (
      !newError.fname &&
      !newError.lname &&
      !newError.phone &&
      !newError.password &&
      !newError.cpassword &&
      !newError.email &&
      passwordsMatch &&
      emailValid &&
      phoneValid &&
      passwordValid
    ) {
      console.log(fname.current.value);
      console.log(lname.current.value);
      console.log(phone.current.value);
      console.log(password.current.value);
      console.log(cpassword.current.value);
      console.log(email.current.value);
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
          Create your account
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              inputRef={fname}
              type="text"
              id="first-name"
              label="First Name"
              variant="outlined"
              error={error.fname}
              helperText={error.fname ? "Can't be Blank" : ""}
              InputProps={{
                sx: { borderRadius: "10px", height: "5vh" }
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              inputRef={lname}
              type="text"
              id="last-name"
              label="Last Name"
              variant="outlined"
              error={error.lname}
              helperText={error.lname ? "Can't be Blank" : ""}
              InputProps={{
                sx: { borderRadius: "10px", height: "5vh" }
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              inputRef={phone}
              type="tel"
              id="phone"
              label="Ph.No"
              variant="outlined"
              error={error.phone || error.phoneInvalid}
              helperText={
                error.phone && !error.phoneInvalid
                  ? "Can't be Blank"
                  : error.phoneInvalid
                  ? "Invalid Phone Number"
                  : ""
              }
              InputProps={{
                sx: { borderRadius: "10px", height: "5vh" }
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
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
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              inputRef={password}
              type="password"
              id="password"
              label="Password"
              variant="outlined"
              error={
                error.password ||
                error.passwordMismatch ||
                error.passwordInvalid
              }
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
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              inputRef={cpassword}
              type="password"
              id="confirm-password"
              label="Confirm Password"
              variant="outlined"
              error={error.cpassword || error.passwordMismatch}
              helperText={
                error.cpassword && !error.passwordMismatch
                  ? "Can't be Blank"
                  : error.passwordMismatch
                  ? "Passwords do not match"
                  : ""
              }
              InputProps={{
                sx: { borderRadius: "10px", height: "5vh" }
              }}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
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
              fullWidth
            >
              Sign up
            </Button>
            <Button
              onClick={() => navigate("/login")} // Use navigate for routing
              sx={{
                borderRadius: "40px",
                backgroundColor: "#ffffff",
                color: "#5704aa",
                textTransform: "capitalize",
                "&:hover": {
                  backgroundColor: "#e0e0e0"
                }
              }}
              fullWidth
            >
              Already have an account? Login
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Register;

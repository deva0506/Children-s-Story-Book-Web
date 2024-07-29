import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Carousel from "react-material-ui-carousel";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import home from "../assets/images/home.webp"; // Replace with your actual image path

function Homepage() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Box
        sx={{
          width: "100vw",
          height: "100vh",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <Box
          sx={{
            backgroundImage: `url(${home})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: -1
          }}
        />
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            height: "100%",
            textAlign: "center",
            margin: "10%",
            color: "white",
            zIndex: 1
          }}
        >
          <Typography
            variant="h2"
            sx={{
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
              padding: "10px"
            }}
          >
            <span style={{ color: "blue" }}>KIDS </span>See{" "}
            <span style={{ color: "red" }}>Fun. </span>
            <br />
            You see real{" "}
            <span style={{ color: "violet" }}>Learning Outcomes. </span>
          </Typography>
        </Container>
      </Box>
      <Divider sx={{ my: 4 }} />
      <Container maxWidth="lg">
        <Typography variant="h4" align="center" sx={{ my: 4 }}>
          Join millions of confident learners
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            borderColor: "divider",
            borderRadius: 2,
            bgcolor: "background.paper",
            color: "text.secondary",
            padding: "16px",
            "& svg": {
              m: 1
            }
          }}
        >
          <Typography align="center">
            Loved by over
            <br />
            <b>
              <span style={{ fontSize: "1.2em" }}>40 million learners</span>
            </b>
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Typography align="center">
            Preferred learning solution in every
            <br />
            <b>
              <span style={{ fontSize: "1.2em" }}>1 in 3 US schools</span>
            </b>
          </Typography>
          <Divider orientation="vertical" flexItem />
          <Typography align="center">
            80% learners show
            <br />
            <b>
              <span style={{ fontSize: "1.2em" }}>
                increased confidence in 4 weeks
              </span>
            </b>
          </Typography>
        </Box>
      </Container>
      <Container maxWidth="lg" sx={{ my: 4 }}>
        <Box>
          <Typography variant="h4" align="center" sx={{ my: 4 }}>
            Unlimited fun. Unlimited learning.
          </Typography>
          <Typography variant="h6" align="center" sx={{ my: 4 }}>
            Dive into Splash Kids - a magical place where learning happens
            through stories and games.
          </Typography>
        </Box>
      </Container>
      <Footer />
    </React.Fragment>
  );
}

export default Homepage;

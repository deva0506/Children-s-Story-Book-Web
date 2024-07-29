import React from "react";
import { Box } from "@mui/material";
import logo2 from "../assets/images/logo2.png";

const Logo = () => {
  return (
    <Box
      component="img"
      sx={{
        height: 63,
        width: 160
      }}
      alt="Logo"
      src={logo2}
    />
  );
};

export default Logo;

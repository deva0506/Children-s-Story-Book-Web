import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";
import Container from "@mui/material/Container";

function preventDefault(event) {
  event.preventDefault();
}

export default function Deposits() {
  return (
    <React.Fragment>
      <Title sx={{ backgroundColor: "#cab3d9" }}>Reading Time</Title>
      <Typography component="p" variant="h4">
        3 hr 24 mins
      </Typography>
      <Typography color="#5704aa" sx={{ flex: 1 }}>
        on 28 July, 2024
      </Typography>
      <div>
        <Link color="#5704aa" href="#" onClick={preventDefault}>
          Recently Used Books
        </Link>
      </div>
    </React.Fragment>
  );
}

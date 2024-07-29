// import * as React from "react";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import CssBaseline from "@mui/material/CssBaseline";
// // import MuiDrawer from "@mui/material/Drawer";
// import Box from "@mui/material/Box";

// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
// import Paper from "@mui/material/Paper";
// import Link from "@mui/material/Link";
// import Chart from "../components/Charts";
// import Navbar from "../components/Navbar";
// import Deposits from "../components/Deposits";
// import Orders from "../components/Orders";

// function Copyright(props) {
//   return (
//     <Typography
//       variant="body2"
//       color="text.secondary"
//       align="center"
//       {...props}
//     >
//       {"Copyright © "}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{" "}
//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

// const drawerWidth = 240;

// const defaultTheme = createTheme();

// export default function Dashboard() {
//   const [open, setOpen] = React.useState(true);
//   const toggleDrawer = () => {
//     setOpen(!open);
//   };

//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <Box sx={{ display: "flex" }}>
//         <CssBaseline />
//         <Navbar />
//         <Box
//           component="main"
//           sx={{
//             backgroundColor: (theme) =>
//               theme.palette.mode === "light"
//                 ? theme.palette.grey[100]
//                 : theme.palette.grey[900],
//             flexGrow: 1,
//             height: "100vh",
//             overflow: "auto"
//           }}
//         >
//           <Toolbar />
//           <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//             <Grid container spacing={3}>
//               {/* Chart */}
//               <Grid item xs={12} md={8} lg={9}>
//                 <Paper
//                   sx={{
//                     p: 2,
//                     display: "flex",
//                     flexDirection: "column",
//                     height: 240
//                   }}
//                 >
//                   <Chart />
//                 </Paper>
//               </Grid>
//               {/* Recent Deposits */}
//               <Grid item xs={12} md={4} lg={3}>
//                 <Paper
//                   sx={{
//                     p: 2,
//                     display: "flex",
//                     flexDirection: "column",
//                     height: 240
//                   }}
//                 >
//                   <Deposits />
//                 </Paper>
//               </Grid>
//               {/* Recent Orders */}
//               <Grid item xs={12}>
//                 <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
//                   <Orders />
//                 </Paper>
//               </Grid>
//             </Grid>
//             <Copyright sx={{ pt: 4 }} />
//           </Container>
//         </Box>
//       </Box>
//     </ThemeProvider>
//   );
// }
import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";

import Chart from "../components/Charts";
import Deposits from "../components/Deposits";
import Orders from "../components/Orders";

function Copyright(props) {
  return (
    <Typography variant="body2" color="#5704aa" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Splash Kids
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto"
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 240
                }}
              >
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: "flex",
                  flexDirection: "column",
                  height: 240
                }}
              >
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={12}>
              <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                <Orders />
              </Paper>
            </Grid>
          </Grid>
          <Copyright sx={{ pt: 4 }} />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

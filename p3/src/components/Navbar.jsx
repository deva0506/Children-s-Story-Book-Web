import React from "react";
import { Link } from "react-router-dom";
import { styled, useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import ListItemIcon from "@mui/material/ListItemIcon";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Logo from "./Logo";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import HelpSharpIcon from "@mui/icons-material/HelpSharp";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GamesIcon from "@mui/icons-material/SportsEsports";
import WorksheetsIcon from "@mui/icons-material/Description";
import ArticlesIcon from "@mui/icons-material/Layers";
import TeachingBlogIcon from "@mui/icons-material/School";
import ParentingBlogIcon from "@mui/icons-material/FamilyRestroom";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflowX: "hidden"
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`
  }
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar
}));

const CustomAppBar = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  backgroundColor: "#ffffff",
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  })
}));

const CustomDrawer = styled(Drawer, {
  shouldForwardProp: (prop) => prop !== "open"
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme)
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme)
  })
}));

const navItems = [
  { text: "Sign In", path: "/register" },
  { text: "Log In", path: "/login" },
  { text: "Home", path: "/home" }
];

function DrawerAppBar(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <CustomAppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="secondary"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" })
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              flexGrow: 1,
              justifyContent: "space-between"
            }}
          >
            <Logo />
            <Box>
              {navItems.map((item) => (
                <Button
                  key={item.text}
                  component={Link}
                  to={item.path}
                  sx={{ color: "#590991" }}
                >
                  {item.text}
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </CustomAppBar>
      <CustomDrawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            {
              text: "Dashboard",
              path: "/dash",
              icon: <DashboardIcon sx={{ color: "#590991" }} />
            },
            { text: "Games", icon: <GamesIcon sx={{ color: "#590991" }} /> },
            {
              text: "Our Library",
              icon: <LibraryBooksIcon sx={{ color: "#590991" }} />
            },
            {
              text: "Articles",
              icon: <ArticlesIcon sx={{ color: "#590991" }} />
            }
          ].map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                component={Link}
                to={item.path}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5
                }}
              >
                <ListItemIcon
                  component={Link}
                  to={item.path}
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center"
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[
            {
              text: "Teaching Blog",
              icon: <TeachingBlogIcon sx={{ color: "#590991" }} />
            },
            {
              text: "Parenting Blog",
              icon: <ParentingBlogIcon sx={{ color: "#590991" }} />
            },
            {
              text: "Support",
              icon: <HelpSharpIcon sx={{ color: "#590991" }} />
            }
          ].map((item) => (
            <ListItem key={item.text} disablePadding sx={{ display: "block" }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? "initial" : "center",
                  px: 2.5
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : "auto",
                    justifyContent: "center"
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText
                  primary={item.text}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </CustomDrawer>
    </Box>
  );
}

export default DrawerAppBar;

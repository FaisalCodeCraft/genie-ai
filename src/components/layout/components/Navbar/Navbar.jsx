import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import { Divider, Link, Typography } from "@mui/material";
import "./navbar.css"
import { AccountCircleOutlined, LoginOutlined, PersonAddOutlined } from "@mui/icons-material";
import ToggleMode from "components/ToggleMode/ToggleMode";
// import { UseContext } from "../../../context";
// import { COLORS } from "constants/contents/color";


const Navbar = () => {

  // const { mode ,key} = React.useContext(UseContext)
  // console.log(cartLenght)
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [navShadow, setNavShadow] = React.useState(false);
  // const [bgColor, setBgColor] = React.useState(false)
  // const [color, setColor] = React.useState(false)
// 
  const changeBgColor = () => {
    if (window.scrollY >= 1) {
      setNavShadow(true);
      // setBgColor(true)
      // setColor(true)
    } else {
      setNavShadow(false);
      // setBgColor(false)
      // setColor(false)
    }
  };

  if (typeof window !== "undefined") {
    window.addEventListener("scroll", changeBgColor);
  }


  const handleDrawerToggle = (_) => setMobileOpen((prevState) => !prevState);





  const drawer = (
    // toggle for small screen
    <Box
      onClick={() => handleDrawerToggle()}
      sx={{ textAlign: "center" }}
      px={3}
    >
      <List>
        <ListItem>
          <Link

            href="/Feature"
            sx={{ color: "black", textDecoration: "none" }}
          >
            Features
          </Link>
        </ListItem>
        <ListItem>
          <Link href="UseCases" sx={{ color: "black", textDecoration: "none" }}>
            UseCase
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/Pricing" sx={{ color: "black", textDecoration: "none" }}>
            Prices
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/Resources" sx={{ color: "black", textDecoration: "none" }}>
            Resources
          </Link>
        </ListItem>
          <ListItem >
            <Link href="/Company" sx={{ color: "black", textDecoration: "none" }}>
              Company
            </Link>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <Box  >

      <AppBar component="nav" sx={{
        bgcolor: "white",
        boxShadow: navShadow ? "2px 0px 3px gray" : "none",
        transition: "all .3s ease"
      }}>
        <Toolbar sx={{ display: "flex", justifyContent: { md: "space-around", sm: "space-between", xs: "space-between" }, alignItems: "center" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { md: "none", sm: "none" } }}
          >
            <MenuIcon sx={{ color: "black" }} />
          </IconButton>
          <List
            variant="h6"
            component="div"
            sx={{
              display: { xs: "block", sm: "block", md: "block" },

            }}
            width={"100%"}
          >

            <ListItem>
              <Link
                href="/"
                sx={{ display: "flex", alignItems: "center", color: "black", textDecoration: "none", }}
              >
                <Typography fontWeight={800}
                  display={"flex"}
                  fontSize={"1.5em"}
                  justifyContent={"center"}
                  alignItems={"center"}>
                  GenieAi.</Typography>
              </Link>
            </ListItem>
          </List>
          <List
            sx={{
              display: { xs: "none", sm: "flex", md: "flex" },
            }}
          >

            <ListItem>
              <Link
                href="/Feature"
                sx={{ color: "black", textDecoration: "none" }}
              >
                Features
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="/UseCases"
                sx={{ color: "black", textDecoration: "none" }}
              >
                Use&nbsp;Case
              </Link>
            </ListItem>
            <ListItem>
              <Link
                href="/Pricing"
                sx={{ color: "black", textDecoration: "none" }}
              >
                Pricing
              </Link>
            </ListItem>

            <List className="dropdown">
              <ListItem>
                <Link
                  href="/Resources"
                  sx={{ color: "black", textDecoration: "none" }}
                >
                  Resources
                </Link>
              </ListItem>
              <Box className="dropdownContentNavItem">
                <ListItem >
                  <Link
                    href="/Blog"
                    sx={{ color: "black", textDecoration: "none" }}
                  >
                    Blog
                  </Link>
                </ListItem>
                <Divider />
                <ListItem >
                  <Link
                    href="/Contact Us"
                    sx={{ color: "black", textDecoration: "none" }}
                  >
                    Help Center
                  </Link>
                </ListItem>
              </Box>
            </List>
            <List className="dropdown">
              <ListItem >
                <Link
                  href="/Company"
                  sx={{ color: "black", textDecoration: "none" }}
                >
                  Company
                </Link>
              </ListItem>
              <Box className="dropdownContentNavItem">
                <ListItem >
                  <Link
                    href="/about"
                    sx={{ color: "black", textDecoration: "none" }}
                  >
                    About Us
                  </Link>
                </ListItem>
                <Divider />
                <ListItem >
                  <Link
                    href="/contact"
                    sx={{ color: "black", textDecoration: "none" }}
                  >
                    Contact Us
                  </Link>
                </ListItem>
              </Box>
            </List>
            {/* <ListItem>
              <Link
                href="#contact"
                sx={{ color:"black", textDecoration: "none" }}
              >
                Contact
              </Link>
            </ListItem> */}
            <Box>
              <ToggleMode color={true} />
            </Box>

          </List>
          <List className="dropdown">
            <Typography>
              <AccountCircleOutlined
                sx={{ color: "black" }}
              />
            </Typography>
            <Box className="dropdownContent">
              <Link href={"/Login"}>
                <ListItem sx={{ py: 1 }}>
                  <Box
                    borderRadius={"50%"}
                    width={"30px"}
                    height={"4px"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    mr={1}
                    p={2}
                  >
                    <LoginOutlined
                      fontSize="large"
                      sx={{

                        color: "black",
                        p: 0.7,
                        width: "30px",
                        height: "35px",
                        borderRadius: "50%",
                      }}
                    />
                  </Box>
                  LOGIN
                </ListItem>
              </Link>
              <Divider />
              <Link href={"/Register"}>

                <ListItem sx={{ py: 1 }}>
                  <Box
                    borderRadius={"50%"}
                    width={"30px"}
                    height={"4px"}
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    mr={1}
                    p={2}
                  >
                    <PersonAddOutlined
                      fontSize="large"
                      sx={{
                        color: "black",
                        p: 0.7,
                        width: "35px",
                        height: "35px",
                        borderRadius: "50%",
                      }}
                    />
                  </Box>
                  REGISTER
                </ListItem>
              </Link>
            </Box>
          </List>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },

            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth, }
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Toolbar />
    </Box>
  );
};
export default Navbar;

const drawerWidth = 200;


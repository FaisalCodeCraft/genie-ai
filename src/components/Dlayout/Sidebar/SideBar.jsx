import * as React from "react";
import List from "@mui/material/List";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import { Delete, Home, Person, VideoCameraBack } from "@mui/icons-material";
import { useNavigate, useLocation } from 'react-router-dom'
import { createMuiTheme } from '@mui/material';
import { ROUTES } from "constant/routes";

let theme = createMuiTheme({
  MuiList: {
    styleOverrides: {
      root: {
        "&.MuiList-sideBar-menu": {
          width: 200,
          minHeight: "100vh",
        },
      },
    },
  },
})

export const SideBar = (props) => {
  const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

  const { pathname } = useLocation();
  const isActiveHomeURL = pathname === ROUTES.PAGES.DASHBOARD.HOME;
  const isActiveVideosURL = pathname === ROUTES.PAGES.DASHBOARD.VIDEOS;
  const isActiveCreateAvaterURL = pathname === ROUTES.PAGES.DASHBOARD.CREATEAVATER;
  const isActiveDeletedVideosURL = pathname === ROUTES.PAGES.DASHBOARD.DELETEVIDEOS;
  const navigate = useNavigate();



  return (
    <Drawer variant={isSmUp ? "permanent" : "temporary"} {...props}>
      <List className="MuiList-sideBar-menu"
        sx={{ bgcolor: "black", height: "100vh", width: 230, color: "white" }}

      >
        {/* <ListItem sx={{ textAlign: "center", my: 4 }}>
          <ListItemText>
            <img
              style={{ width: "50px", height: "50px" }}
              src=""
              alt="dashboard-logo"
            />
          </ListItemText>
        </ListItem> */}
        <ListItem sx={{ textAlign: "center", my: 3 }}>
          <ListItemText 
          primaryTypographyProps={{
            style:{
              fontSize:"1.5em",
              fontWeight:800
            }
          }}
          >
            GenieAi.
          </ListItemText>
        </ListItem>
        <ListItem disablePadding
          sx={{
            borderRadius: "15px",
            width: "90%",
            mx: "auto",
            "&:hover": {
              bgcolor: "blue",
              borderRadius: "15px",
            }
          }}>
          <ListItemButton
            disableGutters
            sx={{
              px: 1,
              borderRadius: "15px",
              "&.Mui-selected": {
                backgroundColor: "blue",
              }
            }}
            selected={isActiveHomeURL}
            onClick={() => navigate(ROUTES.PAGES.DASHBOARD.HOME)}
          >
            <ListItemIcon >
              <Home
                sx={{
                  color: "white"
                }}
                fontSize="small"
              />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{
          borderRadius: "15px",
          width: "90%",
          mx: "auto",
          mt: .5,
          "&:hover": {
            bgcolor: "blue",
            borderRadius: "15px",
          }
        }}>
          <ListItemButton
            disableGutters
            sx={{
              px: 1,
              borderRadius: "15px",
              "&.Mui-selected": {
                backgroundColor: "blue",
              }
            }}
            selected={isActiveVideosURL}
            onClick={() => navigate(ROUTES.PAGES.DASHBOARD.VIDEOS)}
          >
            <ListItemIcon>
              <VideoCameraBack sx={{
                color: "white"
              }}
                fontSize="small" />
            </ListItemIcon>
            <ListItemText>Videos</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{
          borderRadius: "15px",
          width: "90%",
          mx: "auto",
          mt: .5,
          "&:hover": {
            bgcolor: "blue",
            borderRadius: "15px",
          }
        }}>
          <ListItemButton
            disableGutters
            sx={{
              px: 1,
              borderRadius: "15px",
              "&.Mui-selected": {
                backgroundColor: "blue",
              }
            }}
            selected={isActiveCreateAvaterURL}
            onClick={() => navigate(ROUTES.PAGES.DASHBOARD.CREATEAVATER)}
          >
            <ListItemIcon >
              <Person sx={{
                color: "white"
              }}
                fontSize="small" />
            </ListItemIcon>
            <ListItemText>Create Avater</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{
          borderRadius: "15px",
          width: "90%",
          mx: "auto",
          mt: .5,
          "&:hover": {
            bgcolor: "blue",
            borderRadius: "15px",
          }
        }}>
          <ListItemButton
            disableGutters
            sx={{
              px: 1,
              borderRadius: "15px",
              "&.Mui-selected": {
                backgroundColor: "blue",
              }
            }}
            selected={isActiveDeletedVideosURL}
            onClick={() => navigate(ROUTES.PAGES.DASHBOARD.DELETEVIDEOS)}
          >
            <ListItemIcon>
              <Delete sx={{
                color: "white"
              }}
                fontSize="small" />
            </ListItemIcon>
            <ListItemText>Deleted Videos</ListItemText>
          </ListItemButton>
        </ListItem>
       
        <Divider sx={{ mt: 4, backgroundColor: 'white' }} />
        <ListItem disablePadding sx={{
          borderRadius: "15px",
          width: "90%",
          mx: "auto",
          mt: 2,
          "&:hover": {
            bgcolor: "blue",
            borderRadius: "15px",
          }
        }}>
          <ListItemButton
            disableGutters
            sx={{
              px: 2,
              borderRadius: "15px",
              "&.Mui-selected": {
                backgroundColor: "blue",
              }
            }}
            // selected={isActiveDeletedVideosURL}
            // onClick={() => navigate(ROUTES.PAGES.DASHBOARD.DELETEVIDEOS)}
          >
            <ListItemText>
              Logout
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SideBar;

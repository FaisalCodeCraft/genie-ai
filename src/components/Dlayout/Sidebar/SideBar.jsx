import * as React from "react";
// import theme from "styles/theme";
import List from "@mui/material/List";
// import ROUTES from "constant/routes/";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import SettingsIcon from "@mui/icons-material/Settings";
import useMediaQuery from "@mui/material/useMediaQuery";
import ListItemButton from "@mui/material/ListItemButton";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Avatar } from "@mui/material";
import { Delete, Home, Person, VideoCall, VideoCameraBack } from "@mui/icons-material";
// import { COLORS } from "constant/colors";


export const SideBar = (props) => {
//   const isSmUp = useMediaQuery(theme.breakpoints.up("sm"));

//   const { pathname } = useLocation();

//   const navigate = useNavigate();
 

  
  return (
    <Drawer variant={ "permanent" } {...props}>
      <List className="MuiList-sideBar-menu" 
      sx={{bgcolor:"black",height:"100vh",color:"white"}} 
      
      >
        <ListItem sx={{ textAlign: "center", my: 4 }}>
          <ListItemText>
            <img
              style={{ width: "50px", height: "50px" }}
              src=""
              alt="dashboard-logo"
            />
          </ListItemText>
        </ListItem>
        <ListItem  disablePadding sx={{
          "&:hover":{
            bgcolor:"blue"
          }
        }}>
          <ListItemButton
            // onClick={() => navigate(ROUTES.COMMON.DASHBOARD)}
          >
            <ListItemIcon>
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
        <ListItem  disablePadding sx={{
          "&:hover":{
            bgcolor:"blue"
          }
        }}>
          <ListItemButton
            // selected={isActiveStudentURL}
            // onClick={() => navigate(ROUTES.COMMON.STUDENTS)}
          >
            <ListItemIcon>
             <VideoCameraBack    sx={{
                  color: "white"
                }}
                fontSize="small"/>
            </ListItemIcon>
            <ListItemText>Videos</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem   disablePadding sx={{
          "&:hover":{
            bgcolor:"blue"
          }
        }}>
          <ListItemButton
            // selected={isActiveStudentURL}
            // onClick={() => navigate(ROUTES.COMMON.STUDENTS)}
          >
            <ListItemIcon>
           <Person    sx={{
                  color: "white"
                }}
                fontSize="small"/>
            </ListItemIcon>
            <ListItemText>Craete Avater</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{
          "&:hover":{
            bgcolor:"blue"
          }
        }}
        >
          <ListItemButton
            // selected={true}
            // onClick={() => navigate(ROUTES.COMMON.STUDENTS)}
          >
            <ListItemIcon>
             <Delete    sx={{
                  color: "white"
                }}
                fontSize="small"/>
            </ListItemIcon>
            <ListItemText>Deleted Videos</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding sx={{
          "&:hover":{
            bgcolor:"blue"
          }
        }}>
          <ListItemButton
          // selected={isActiveSettingURL}
        //   onClick={() => navigate(ROUTES.COMMON.SETTINGS)}
          >
            <ListItemIcon>
              <SettingsIcon
                sx={{
                  color: "white"
                }}
                fontSize="small"
              />
            </ListItemIcon>
            <ListItemText>Settings</ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider sx={{ mt: 4, backgroundColor: 'white' }} />
        <ListItem>
          <ListItemButton
            // selected={isActiveSign_inURL}
            // onClick={logout}
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

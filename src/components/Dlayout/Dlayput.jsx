import React from 'react'
import SideBar from './Sidebar/SideBar'
import { Box } from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import DashNavbar from './DashNavbar/DashNavbar';

const Dlayput = (props) => {
  const { children, title } = props || {}
  const [isSideBarOpen, setSideBarOpen] = React.useState(false);

  const handleSideBarToggle = () => setSideBarOpen(!isSideBarOpen);

  return (
    <React.Fragment>
      <Box position={"relative"} display={"flex"} width={"100%"}>
        <Box
          sx={{ width: { md: 230, sm: 200 }, flexShrink: { sm: 0 } }}
        >
          <SideBar open={isSideBarOpen} onClose={handleSideBarToggle} />
        </Box>
        <Box sx={{ position: "absolute", display: { sm: "none", xs: "block" } }}>
          <IconButton
            color="secondary"
            aria-label="open sidebar"
            onClick={handleSideBarToggle}
          >
            <MenuIcon sx={{ width: "30px", height: "30px", color: "black" }} />
          </IconButton>
        </Box>

        <Box
          width={"100%"}
          px={{ md: 6, sm: 6, xs: 2 }}
        >
          <DashNavbar title={title} />
          {children}
        </Box>
      </Box>
    </React.Fragment>
  )
}

export default Dlayput

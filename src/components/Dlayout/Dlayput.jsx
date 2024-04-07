import React from 'react'
import SideBar from './Sidebar/SideBar'
import { Box } from '@mui/material'

const Dlayput = (props) => {
  const { children } = props || {}

  return (
    <React.Fragment>
      <Box position={"relative"} display={"flex"} width={"100%"}>
        <Box
          sx={{ width: { md: 200, sm: 200 }, flexShrink: { sm: 0 } }}
        >
          <SideBar />
        </Box>
        <Box
          width={"100%"}
          px={{ md: 6 }}
        >{children}</Box>
      </Box>
      {/* <Box ><Footer/></Box> */}
    </React.Fragment>
  )
}

export default Dlayput

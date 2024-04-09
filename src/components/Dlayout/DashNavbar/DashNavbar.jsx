import React from 'react'
import { Box, Typography } from '@mui/material'
import { DeleteOutlined, HomeOutlined, PersonOutline,  VideoCameraBackOutlined } from '@mui/icons-material'


const DashNavbar = (props) => {
    const { title } = props || {}
    return (
        <Box
            p={2}
            px={0}
            display={"flex"}
            justifyContent={"space-between"}
        >
            <Box>
                <Typography
                    display={"flex"}
                    fontWeight={"bold"}
                >{title === "Home" ? <HomeOutlined sx={{ mr: 1 }} />
                    : title === "Video" ? <VideoCameraBackOutlined sx={{ mr: 1 }}/>
                        : title === "Create Avater" ? <PersonOutline sx={{ mr: 1 }}/>
                        : title === "Delete Videos" ? <DeleteOutlined sx={{ mr: 1 }}/>
                            : ""
                    }
                    {title}
                </Typography>
            </Box>
            <Box><Typography>User Name</Typography></Box>
        </Box>
    )
}

export default DashNavbar
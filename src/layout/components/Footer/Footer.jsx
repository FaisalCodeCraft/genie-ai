import { Facebook, Instagram, LinkedIn, Twitter, YouTube } from '@mui/icons-material'
import { Box, Container, Grid, List, ListItem, Typography } from '@mui/material'
import { LISTS } from 'constant/contents'
import React from 'react'

const Footer = () => {
  return (
    <Box py={{md:4,sm:2,xs:1}} bgcolor={"rgb(236, 237, 237)"}>
        <Container maxWidth="lg">
        <Grid container  >
            <Grid item md={3.5} sm={3.5} xs={12}>
                <Typography 
                fontSize={{md:"2em"}}
                fontWeight={800}
                >
                    Genei Ai.
                </Typography>
                <Typography 
                fontSize={{md:".8em"}}
                >
                   @ 2023 Genei Ai. Lorem ipsum dolor sit amet.
                </Typography>
                <Box display={"flex"} alignItems={"center"} mt={1}>
                <Facebook
                  sx={{
                    "&:hover": {
                      color: "rgb(0, 79, 136)",
                      cursor:"pointer"
                    },
                  }}
                />
                <Twitter
                  sx={{
                    mx: 1,
                    "&:hover": {
                      color: "rgb(11, 139, 189)",
                      cursor:"pointer"
                    },
                  }}
                />
                <LinkedIn
                  sx={{
                    mr: 1,
                    "&:hover": {
                      color: "rgb(11, 115, 189)",
                      cursor:"pointer"
                    },
                  }}
                />

                <YouTube
                  sx={{
                    "&:hover": {
                      color: "red",
                      cursor:"pointer"
                    },
                  }}
                />
              </Box>
            </Grid>
            {
                LISTS.map((item,i)=>(
                    <Grid item md={2.1}sm={2.1}  key={i} mt={{md:0,sm:0,xs:3}}>
                        <List disablePadding sx={{mr:{md:0,sm:0,xs:3}}}>
                            <ListItem disableGutters sx={{fontWeight:"bold"}}>{item?.title}</ListItem>
                            <ListItem disableGutters >{item?.l_Item1}</ListItem>
                            <ListItem disableGutters >{item?.l_Item2}</ListItem>
                            <ListItem disableGutters >{item?.l_Item3}</ListItem>
                            <ListItem disableGutters >{item?.l_Item4}</ListItem>
                            <ListItem disableGutters >{item?.l_Item5}</ListItem>
                            <ListItem disableGutters >{item?.l_Item6}</ListItem>
                            <ListItem disableGutters >{item?.l_Item7}</ListItem>
                        </List>
                    </Grid>
                ))
            }
        </Grid>
        </Container>
    </Box>
  )
}

export default Footer
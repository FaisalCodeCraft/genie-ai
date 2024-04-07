import { ChevronRight } from '@mui/icons-material'
import { Box, Container, Typography } from '@mui/material'
import ButtonComp from 'components/Button/Button'
import React from 'react'
import { Link } from 'react-router-dom'

const AboutHeader = () => {
  return (
    <Box position={"relative"}>
        <Box position={"absolute"}
                zIndex={-9}
                width={"100%"}
                height={{md:"100vh"}}
            >
                <img
                    width={"100%"}
                    height={"100%"}
                    style={{
                        filter: "brightness(70%)"
                    }}
                    src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </Box>

            <Container maxWidth="md">
                <Typography sx={{
                    fontSize: { md: "1.5em" },
                    fontWeight: "bold",
                    px: { md: 5 },
                    textAlign: "center",
                    pt: { md: 20 },
                    color: "white"

                }}>About</Typography>
                <Typography sx={{
                    fontSize: { md: "3.5em" },
                    fontWeight: "bold",
                    px: { md: 15 },
                    textAlign: "center",
                    color: "white",
                    lineHeight:{md:"65px"}

                }}>Advancing the World with Artificial Intelligence</Typography>
                <Typography
                    py={{ md: 3 }}
                    fontSize= { {md: "1.2em"} }
                    textAlign={"center"}
                    color={"white"}
                >
                    Where enterprises and AI meet at the pinnacle of innovation. We develop state-of-the-art AI to accelerate business growth.
                </Typography>
               
            </Container>
    </Box>
  )
}

export default AboutHeader
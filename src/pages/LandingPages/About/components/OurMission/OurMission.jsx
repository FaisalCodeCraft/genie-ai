import { Box, Container, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { UseContext } from 'context'

const OurMission = () => {
    const{mode}=useContext(UseContext)
    return (
        <Box 
        py={{ md: 10 }}
             bgcolor={mode === "light" ? "rgb(236, 237, 237)" 
        : "rgb(34,34,34)"}
        >
            <Container maxWidth="md">
                <Typography sx={{
                    fontSize: { md: "1.4em" },
                    fontWeight: "bold",
                    px: { md: 15 },
                    textAlign: "center",
                    pt: { md: 18 },


                }}>Our Mission</Typography>
                <Typography sx={{
                    fontSize: { md: "3em" },
                    fontWeight: "bold",
                    px: { md: 15 },
                    textAlign: "center",
                    lineHeight: { md: "60px" }
                }}>Advance Humanity with Human-AI Collaboration</Typography>
                <Typography
                    py={{ md: 3 }}
                    textAlign={"center"}
                    px={{ md: 10 }}

                >
                    We design artificial intelligence to best assist people. We strive to help people to be the most creative and meaningful versions of themselves.
                </Typography>

            </Container>
        </Box>
    )
}

export default OurMission
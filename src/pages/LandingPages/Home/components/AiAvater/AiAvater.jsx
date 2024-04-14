import { Box, Container, Grid, Typography } from '@mui/material'
import ButtonComp from 'components/Button/Button'
import { AVATERS } from 'constant/contents'
import React from 'react'

const AiAvater = () => {
    return (
        <Box py={{ md: 15, sm: 8, xs: 6 }} px={{ md: 8 }}>
            <Container maxWidth="lg" >
                <Grid container alignItems={"center"} spacing={4}>
                    <Grid item md={5}>
                        <Typography mb={"10px"} color={"blue"} fontSize={".8em"}>AI AVATARS</Typography>
                        <Typography
                            fontSize={{ md: "2em", sm: "1.7em", xs: "1.5em" }}
                            lineHeight={{ md: "40px" }}

                        >
                            Create marketing videos as diverse as your audience</Typography>

                        <Typography fontSize={"1em"} py={3}>
                            Make your marketing videos more inclusive by selecting from over 150 AI Avatars varied in age, ethnicity and gender.
                        </Typography>
                        <Box display={{ md: "block", xs: "none" }}>
                            <ButtonComp title="See All Avaters" width="170px" />
                        </Box>

                    </Grid>
                    <Grid item md={7}>
                        <Grid container spacing={2}>
                            {
                                AVATERS.map((item, index) => (
                                    <Grid item md={4} sm={4} key={index}>
                                        <Box width={"100%"} height={{ md: "180px", xs: "100%" }}>
                                            <img src={item.url} width={"100%"} height={"100%"} style={{
                                                objectFit: "cover",
                                                border: "3px solid gray",
                                                borderRadius: "10px"
                                            }} alt="" />


                                        </Box>
                                    </Grid>
                                ))
                            }
                        </Grid>
                    </Grid>
                </Grid>
                    <Box
                        display={{ md: "none", xs: "flex" }}
                        alignItems={"center"}
                        justifyContent={"center"}
                        width={"100%"}
                        mt={4}
                    >
                        <ButtonComp title="See All Avaters" width="170px" />
                    </Box>
            </Container>
        </Box>
    )
}

export default AiAvater
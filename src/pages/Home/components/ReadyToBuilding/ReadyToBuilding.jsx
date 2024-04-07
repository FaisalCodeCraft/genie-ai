import { Box, Container, Grid, Typography } from '@mui/material'
import ButtonComp from 'components/Button/Button'
import React from 'react'

const ReadyToBuilding = () => {
    return (
        <Box py={{ md: 10, sm: 7, xs: 4 }}>
            <Container maxWidth="lg">
                <Typography
                    width={{ md: "600px" }}
                    textAlign={"center"}
                    mx={"auto"}
                    fontSize={{ md: "2em" }}
                    fontWeight={600}
                >
                    Ready to start building out better content with AI?
                </Typography>
                <Grid container spacing={{md:4}} px={{ md: 15 }} py={{md:5,sm:4,xs:3}}>
                    <Grid item md={6} sm={6}>
                    <img width={"100%"} height={"350px"} src="https://synthesys.io/images/banners/twoImages/LeftTop.png" alt="" />


                    </Grid>
                    <Grid item md={6} sm={6}>
                        <img width={"100%"} height={"350px"} src="https://synthesys.io/images/banners/twoImages/RightBottom.png" alt="" />

                    </Grid>
                    <Box width={"180px"} mx={"auto"} my={{md:7,sm:5,xs:3}}>
                        <ButtonComp title="Try for free" />

                    </Box>
                </Grid>
            </Container>
        </Box>
    )
}

export default ReadyToBuilding
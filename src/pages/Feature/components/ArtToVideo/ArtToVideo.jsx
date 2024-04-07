import { Box, Container, Grid, Typography } from '@mui/material'
import ButtonComp from 'components/Button/Button'
import React from 'react'

const ArtToVideo = () => {
    return (
        <Box px={{md:8}}>
            <Container maxWidth="lg">
                <Grid container  bgcolor={"rgb(236, 237, 237)"} my={{md:8,sm:6,xs:5}}
                py={4}
                px={{md:8,sm:3,xs:2}}
                borderRadius={2}
                >
                    <Grid item md={6} sm={6} pr={{md:10,sm:3}}>
                        <Box>
                            <img
                             width={"100%"}
                             style={{
                                borderRadius:"8px"
                             }}
                             src="https://images.pexels.com/photos/66134/pexels-photo-66134.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={6}>
                        <Typography 
                        fontSize={{md:"2em",sm:"1.5em",xs:"1.3em"}}
                        pb={2}
                        >
                            Easily convert article to video
                        </Typography>
                        <Typography>
                            If you want to save time and effort when it comes to generating videos, using Elai which can create videos from URLs is a great option.
                        </Typography>
                        <Box width={"200px"}  mt={{md:10,sm:5,xs:3}}>
                        <ButtonComp title="Explore Now" />

                    </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default ArtToVideo
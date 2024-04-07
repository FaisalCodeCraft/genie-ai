import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import "./pricing.css"
import ButtonComp from 'components/Button/Button'

const PricingCustomAvators = () => {
    return (
        <Box py={{ md: 10,sm:6,xs:4 }}>
            <Container maxWidth="lg">
                <Grid container spacing={{md:4,sm:2}} xs={12} 
                >
                <Grid item md={6}>
                        <Box
                            bgcolor={"rgb(236, 237, 237)"}
                            px={{md:5,sm:2,xs:2}}
                            py={2}
                            borderRadius={"8px"}
                        >
                            <Typography
                                fontSize={{ md: "2.5em", }}
                                fontWeight={600}
                                lineHeight={{ md: "42px" }}
                            >
                                Need A
                                Custom Avatar?
                            </Typography>

                            <Grid container spacing={{md:6,sm:10}} pt={3}>
                                <Grid item md={6} sm={6} >
                                    < Box height={"200px"}>
                                        <img
                                            width={"100%"}
                                            height={"100%"}
                                            style={{
                                                borderRadius: "8px",
                                                objectFit:'cover'
                                            }}
                                            src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcStfmufEoKK2M4Tg2dctXg4x1IerYOoiNJe5Hy5KkxOczGVlQsU"
                                            alt='Avater'
                                        />
                                    </Box >
                                    <Typography
                                        fontSize={{ md: "2em" }}
                                        fontWeight={600}
                                        lineHeight={{ md: "42px" }}
                                        mt={1}
                                    >
                                        Selfie avatar:
                                        $199
                                    </Typography>
                                    <Typography
                                        my={2}
                                    >
                                        Use a smartphone or web camera to create an animated video avatar of yourself in no time.

                                    </Typography>
                                </Grid>
                                <Grid item md={6} sm={6} mt={{md:0,sm:0,xs:4}}>
                                    <Box height={"200px"} borderRadius={"10px"}>
                                        <img
                                            width={"100%"}
                                            height={"100%"}
                                            style={{
                                                borderRadius: "8px",
                                                objectFit:'cover'
                                            }}
                                            src='https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQQHn5m61zKBaNWU703e6NL5Ddt0xaq0oTCI8GdgAUCrrikihRv'
                                           alt=' avater'
                                        />
                                    </Box>
                                    <Typography
                                        fontSize={{ md: "2em" }}
                                        fontWeight={600}
                                        lineHeight={{ md: "42px" }}
                                        mt={1}
                                    >
                                        Studio avatar:
                                        $599
                                    </Typography>
                                    <Typography
                                        my={2}
                                    >
                                        Get a 4K studio-quality AI avatar and use it in
                                        your videos. Make it speak in 65+ languages!
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Box
                                sx={{
                                    width: { md: "180px", xs: "160px" },
                                    ml: 'auto',
                                    mt: 6
                                }}
                            >
                                <ButtonComp title="See All options" />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item md={6} sm={12}  mt={{md:0,sm:0,xs:3}}>
                        <div className='container' >
                            <img
                                width={"100%"}
                                height={"100%"}
                                className='image'
                                style={{
                                    borderRadius: "8px",
                                    objectFit:"cover"
                                }}
                                src="https://images.pexels.com/photos/264905/pexels-photo-264905.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                            <Box
                                position={"absolute"}
                                top={0}
                                p={{md:4,sm:3,xs:2}}
                            >
                                <Typography
                                    color={"white"}
                                    fontSize={{ md: "2.5em", sm:"2em"}}
                                    fontWeight={600}
                                    lineHeight={{ md: "42px" }}
                                >
                                    Want to voiceover your cartoon mascot?
                                </Typography>

                            </Box>
                            <Box
                                sx={{
                                    width: { md: "180px", xs: "160px" },
                                    ml: 'auto',
                                    position: "absolute",
                                    bottom: {md:45,sm:35,xs:10},
                                    right: {md:45,sm:35,xs:6},
                                }}
                            >
                                <ButtonComp title="Learn More" />
                            </Box>

                        </div>

                    </Grid>
                  
                </Grid>
            </Container>
        </Box >
    )
}

export default PricingCustomAvators
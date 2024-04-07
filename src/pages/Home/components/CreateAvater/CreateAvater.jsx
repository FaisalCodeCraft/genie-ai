import { ArrowForward, ChevronLeft } from '@mui/icons-material'
import { Box, Container, Grid, Link, Typography } from '@mui/material'
import React from 'react'

const CreateAvater = () => {
    return (
        <Box mt={{ md: 12, sm: 6, xs: 4 }} pb={4} px={{md:8}}>
            <Container maxWidth="lg" sx={{ width: "100%" }}>
                <Typography width={{ md: "400px" }}
                    textAlign={"center"}
                    mx={"auto"}
                    fontSize={{md:"2em"}}
                    fontWeight={600}
                >Create a unique avatar for your videos</Typography>

                <Grid container columnSpacing={{md:3,sm:2}} mt={5}>
                    <Grid item md={4} sm={4} bgcolor={"white"}
                    boxShadow={"2px 3px 10px  gray"} padding={3} borderRadius={"8px"} color={"black"}>
                        <Typography
                            fontSize={"2em"}
                            fontWeight={600}
                        >Selfie Avater</Typography>
                        <Typography  my={4}>Use a smartphone or web camera to create an animated Avatar of yourself in no time</Typography>
                        <Box width={"150px"} mx={"auto"} mt={3}>
                            <img width={"100%"} style={{ borderRadius: "8px" }} src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRvf9WJH5cCTGFnI9BVQVEdoaRR4QRb11im88y3kPm4v5cZSYqd" alt="" />
                        </Box>
                        <Link sx={{
                            textDecoration: "none", color: "blue", display: "flex",
                            alignItems: "center",
                            justifyContent: "end",
                            mt: 5
                        }}>Create now <ArrowForward /></Link>
                    </Grid>
                    <Grid item md={8} sm={8} mt={{md:0,sm:0,xs:3}}>
                        <Grid container rowGap={3}>
                            <Grid item md={12}
                            boxShadow={"2px 3px 10px  gray"}
                                display={"flex"}

                                bgcolor={"white"} padding={3} borderRadius={"8px"} color={"black"}>
                                <Box>
                                    <Typography
                                        fontSize={"2em"}
                                        fontWeight={600}
                                    >Studio Avatar</Typography>
                                    <Typography fontSize={".8em"} my={2}>Use a smartphone or web camera to create an animated Avatar of yourself in no time</Typography>

                                    <Link sx={{
                                        textDecoration: "none", color: "blue", display: "flex",
                                        alignItems: "center",
                                        justifyContent: "start"
                                    }}>Create now <ArrowForward /></Link>
                                </Box>

                                <Box width={"150px"} mx={"auto"} mt={4}>
                                    <img width={"100%"} style={{ borderRadius: "8px" }} src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRvf9WJH5cCTGFnI9BVQVEdoaRR4QRb11im88y3kPm4v5cZSYqd" alt="" />
                                </Box>
                            </Grid>
                            <Box width={"100%"}>
                                <Grid container columnGap={{md:2,sm:2}}>
                                    <Grid item md={5.8} sm={5.8}
                                    boxShadow={"2px 3px 10px  gray"} bgcolor={"white"} padding={3} borderRadius={"8px"} color={"black"}>
                                        <Box>
                                            <Typography
                                                fontSize={"2em"}
                                                fontWeight={600}
                                            >Photo Avatar
                                            </Typography>
                                            <Box display={"flex"} alignItems={"center"}>
                                                <Typography fontSize={".8em"} pr={1}>Use a smartphone or web camera to create an animated Avatar of yourself in no time</Typography>
                                                <Box width={"150px"} mx={"auto"} mt={2}>
                                                    <img width={"100%"} style={{ borderRadius: "8px" }} src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRvf9WJH5cCTGFnI9BVQVEdoaRR4QRb11im88y3kPm4v5cZSYqd" alt="" />
                                                </Box>
                                            </Box>

                                            <Link sx={{
                                                textDecoration: "none", color: "blue", display: "flex",
                                                alignItems: "center",
                                                justifyContent: "start"
                                            }}>Create now <ArrowForward /></Link>
                                        </Box>


                                    </Grid>
                                    <Grid item md={5.9} sm={5.7} mt={{md:0,sm:0,xs:3}}
                                    boxShadow={"2px 3px 10px  gray"} bgcolor={"white"} padding={3} borderRadius={"8px"} color={"black"}>
                                        <Box>
                                            <Typography
                                                fontSize={"2em"}
                                                fontWeight={600}
                                            >Animated 
                                            </Typography>
                                            <Box display={"flex"} alignItems={"center"}>
                                                <Typography fontSize={".8em"} pr={1}>Use a smartphone or web camera to create an animated Avatar of yourself in no time</Typography>
                                                <Box width={"150px"} mx={"auto"} mt={2}>
                                                    <img width={"100%"} style={{ borderRadius: "8px" }} src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRvf9WJH5cCTGFnI9BVQVEdoaRR4QRb11im88y3kPm4v5cZSYqd" alt="" />
                                                </Box>
                                            </Box>

                                            <Link sx={{
                                                textDecoration: "none", color: "blue", display: "flex",
                                                alignItems: "center",
                                                justifyContent: "start"
                                            }}>Create now <ArrowForward /></Link>
                                        </Box>


                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
            </Container >
        </Box >
    )
}

export default CreateAvater

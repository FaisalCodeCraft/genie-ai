import { ArrowForward } from '@mui/icons-material'
import { Box, Button, Container, Grid, Link, Typography } from '@mui/material'
import { USE_AVATER } from 'constant/contents'
import { UseContext } from 'context'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const UseAvater = () => {

    const navigate = useNavigate()

    const { mode } = useContext(UseContext)
    return (
        <Box py={{ md: 18, sm: 8, xs: 5 }} px={{ md: 8 }}>
            <Container maxWidth="lg">
                <Typography
                    fontSize={{ md: "2.5em", sm: "2em", xs: "1.5em" }}
                    fontWeight={"bold"}
                    width={{ md: "40%" }}
                    mx={"auto"}
                    textAlign={"center"}
                    lineHeight={{ md: "48px" }}
                >Use Elai Avatars in Your Video Content</Typography>
                <Typography
                    width={{ md: "50%" }}
                    mx={"auto"}
                    textAlign={"center"}
                    py={3}
                >
                    The video avatars can be useful in many fields, whether you want to create educational video content, generate a product walkthrough video, or personalize your marketing videos. Pick a presenter of your choice in the library and use it in any of your videos.
                </Typography>
                <Grid container spacing={4} mt={10}>
                    {
                        USE_AVATER.map((item, i) => (
                            <Grid item md={4} sm={6} key={i}
                                color={"black"}
                                mt={{ md: 0, sm: 4, xs: 5 }}
                                sx={{
                                    textAlign: "center",
                                    "&:nth-child(2)": { mt: { md: "3em" } },
                                    "&:nth-child(3)": { mt: { md: "6em" } },
                                }}
                            >
                                <Box
                                    boxShadow={"2px 3px 10px  gray"}
                                    borderRadius={"18px"}
                                >
                                    <Box >

                                        <img width={"100%"} style={{ marginTop: "-2.4em" }} src={item.poster} alt="avater" />
                                    </Box>
                                    <Box p={3}>
                                        <Typography
                                            fontSize={"1.5em"}
                                            fontWeight={600}
                                            color={mode === "light" ? "black" : "white"}
                                        >{item.title}</Typography>
                                        <Typography py={2}
                                            fontSize={"1em"}
                                            color={"gray"}
                                        >{item.desc}</Typography>
                                        <Button
                                            onClick={() => navigate("/pages/Dashboard/Dashboard")}
                                            sx={{
                                                bgcolor: "blue",
                                                color: "white",
                                                textDecoration: "none",
                                                display: "flex",
                                                alignItems: "center",
                                                justifyContent: "end",
                                                cursor: "pointer",
                                                width: "220px",
                                                ml: "auto",
                                                p: 1.5,
                                                mt: 3,
                                                borderRadius: "8px",
                                                fontSize: ".7em",
                                                "&:hover": {
                                                    color: "white",
                                                    bgcolor: "black",
                                                }
                                            }}
                                        >{item.add}
                                            <ArrowForward sx={{
                                                color: "white",
                                                mx: .5,

                                            }} />
                                        </Button>
                                    </Box>
                                </Box>

                            </Grid>
                        ))
                    }
                </Grid>
            </Container>
        </Box>
    )
}

export default UseAvater
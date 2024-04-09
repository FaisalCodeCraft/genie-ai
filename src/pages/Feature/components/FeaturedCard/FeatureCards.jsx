import React, { useContext } from 'react'
import { Grid, Typography, Box, Container, Link } from '@mui/material'
import { FEATURE_CARD } from 'constant/contents'
import ButtonComp from 'components/Button/Button'
import { ChevronRight } from '@mui/icons-material'
import { UseContext } from 'context'

const FeatureCards = () => {
    const { mode } = useContext(UseContext)
    return (
        <Box position={"relative"}
            zIndex={2}
        >
            <Box position={"absolute"}
                zIndex={-1}
                width={"100%"}
                height={"75vh"}
            >
                <img
                    width={"100%"}
                    height={"100%"}
                    style={{
                        filter: "brightness(70%)"
                    }}
                    src="https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </Box>

            <Container maxWidth="lg">
                <Typography sx={{
                    fontSize: { md: "4em", sm: "2.5em", xs: "1.5em" },
                    fontWeight: "bold",
                    px: { md: 5 },
                    textAlign: "center",
                    pt: { md: 18, sm: 15, xs: 12 },
                    color: "white"

                }}>Main Genei Features</Typography>
                <Typography
                    pb={{ md: 3, xs: 2 }}
                    textAlign={"center"}
                    color={"white"}
                >
                    We work hard every day to make video creation better and easier
                </Typography>
                <Box
                    display={{ md: "flex", sm: "flex" }}
                    justifyContent={"space-around"}
                    alignItems={"center"}
                    width={{ md: "30%", sm: "50%", xs: "70%" }}
                    mx={"auto"}
                    mt={{ md: 3, sm: 2, xs: 1 }}
                    pb={{ md: 15, sm: 10, xs: 8 }}

                >
                    <Box width={"200px"}>
                        <ButtonComp title="Try Genie for free" />

                    </Box>
                    <Link sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        textDecoration: "none",
                        color: "lightgray",

                        pl: 3,
                        mt: { md: 0, sm: 0, xs: 2 }
                    }}>
                        How it works <ChevronRight />
                    </Link>
                </Box>
            </Container>

            <Grid container spacing={{ md: 4, sm: 3, xs: 2 }}
                bgcolor={mode === "light" ? "rgb(236, 237, 237)" : "rgb(34,34,34)"}
                p={{ md: 10, sm: 8, xs: 2 }}
            >
                {FEATURE_CARD.map((item) => (
                    <Grid item md={3} sm={6}>
                        <Box
                            sx={{
                                // boxShadow: " inset 0 0 8px 1px lightgray, 0 0 8px 3px rgb(247, 250, 250)",
                                height: { md: 200, sm: 200 },
                                boxShadow: mode === "light" ? `rgba(174, 174, 192, 0.3) 5px 5px 10px 5px,
                                rgb(255, 255, 255) -5px -5px 10px 0px,
                                 rgb(255, 255, 255) 2px 2px 4px 0px inset,
                                rgba(0, 0, 0, 0.1) -2px -2px 4px 0px inset;`
                                    : "inset 0 0 8px 1px gray, 0 0 8px 3px rgba(174, 174, 192, 0.3)",
                                p: { md: 3, sm: 2, xs: 1 },
                                borderRadius: 2,
                                bgcolor: mode === "light" ? "rgb(236, 237, 237)" : "rgb(34,34,34)"
                            }}
                        >
                            <Typography sx={{ fontSize: { md: "1.5em" }, fontWeight: "bold", p: 1 }}>{item.title}</Typography>
                            <Typography sx={{ fontSize: { md: '14px' } }}>{item.description}</Typography>

                        </Box>
                    </Grid>
                ))}
                <Box width={"200px"} mx={"auto"} my={{ md: 10, sm: 7, xs: 5 }}>
                    <ButtonComp title="See All Features" />

                </Box>
            </Grid>

        </Box>
    )
}

export default FeatureCards
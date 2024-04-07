import React from 'react'
import { Box, Container,  Grid,  Typography } from '@mui/material'
import ButtonComp from 'components/Button/Button'
import { USECASES_CARD } from 'constant/contents'

const UseCaseHeader = () => {
    return (
        <Box bgcolor={"rgb(236, 237, 237)"} sx={{ p: { md: 6, sm: 4 } }}>
            <Container maxWidth="lg" sx={{ py: 10 }}>
                <Typography
                    sx={{
                        fontSize: { md: "3em", sm: "2em", xs: "1.5em" },
                        fontWeight: 800,
                        textAlign: "center",
                        p: { md: 5, sm: 4, xs: 2 },
                        width: { md: "50%" },
                        display: "flex",
                        justifyContent: 'center',
                        m: 'auto',
                        lineHeight: { md: "50px" },

                    }}
                >Use Casses</Typography>
                <Typography textAlign={"center"} fontSize={{ md: '18px' }} color={"gray"}>Start for free today. You have 1 free minute to test the solution.</Typography>
                <Box
                    sx={{
                        width: "200px",
                        mx: 'auto',
                        mt: { md: 3, sm: 2, xs: 1 },
                        mb: { md: 10, sm: 8, xs: 6 }
                    }}
                >
                    <ButtonComp title="Try Genei for Free" />
                </Box>

                <Grid container spacing={4} >
                    {USECASES_CARD.map((data) => (
                        <Grid item md={4} sm={6} >
                            <Box
                                sx={{

                                    p: 2.5,
                                    borderRadius: 1.3,
                                    height: "400px"
                                }}
                                bgcolor={"white"}
                            >
                                <img
                                    src={data.imgUrl}
                                    alt={data.imgUrl}
                                    width="100%"
                                    height="200px"
                                    style={{
                                        borderRadius: 1.3
                                    }}
                                />
                                <Typography sx={{ fontSize: { md: '1.3em' }, pt: 2, fontWeight: "bold" }}>{data.title}</Typography>
                                <Typography sx={{ color: "gray" }}>{data.description}</Typography>
                            </Box>
                        </Grid>
                    ))}

                </Grid>

                <Box py={{ md: 5, sm: 4, xs: 3 }} 
                    mt={{md:10,sm:5,xs:2}} borderRadius={"8px"} bgcolor={"white"}>
                    <Typography fontSize={{ md: "2.5em", sm: "1.5em" }}
                        fontWeight={"bold"}
                        textAlign={"center"}
                    >
                        Create AI Videos
                    </Typography>
                    <Typography
                        textAlign={"center"}
                        py={1}
                    >
                        Start creating your AI-powered videos with Elai.io today
                    </Typography>
                    <Box
                        sx={{
                            width: "180px",
                            mx: 'auto',
                            mt: { md: 3 },
                            mb: { md: 5, }
                        }}
                    >
                        <ButtonComp title="TGo To Builder" />
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default UseCaseHeader
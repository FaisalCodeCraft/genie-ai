import { Box, Container, Link, Typography } from '@mui/material'
import React from 'react'
// import ButtonComp from '../../../../components/Button/Button'
import { ChevronRight } from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import ButtonComp from 'components/Button/Button'

const Header = () => {
    const navigate = useNavigate()

    return (
        <Box pt={{ md: 23, sm: 15, xs: 10 }} sx={{ overflowX: "hidden" }}>
            <Container maxWidth="md">
                <Box display={'flex'}
                    justifyContent={"center"}
                    alignItems={"center"}
                    position={"relative"}
                    flexDirection={"column"}
                >
                    <Box
                        width={"70px"}
                        position={"absolute"}
                        zIndex={-1}
                        left={{ md: 0, sm: 100, xs: "-15%" }}
                        top={{ md: 50, sm: 100 }}
                    >
                        <img
                         width={"100%"}
                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-Ar72XzG589Q5nKh1rCn2LdKaJ0hZ3xOBb71Fatvx0MQQ0Qyy" alt="" />
                    </Box>
                    <Box width={{ md: "70%", sm: "65%" }} textAlign={"center"} mt={{ md: 0, xs: 4 }} >

                        <Typography fontSize={{ md: "3.5em", sm: "3em", xs: "1.3em" }}
                            fontWeight={{ md: 700, sm: 600, xs: 600 }}
                            lineHeight={{ md: "65px" }}
                        >
                            Talking avatars by GenieAi</Typography>
                        <Typography width={{ md: "440px" }} mx={"auto"} py={3} fontSize={"small"}>With Elai.io, you can choose any presenter from the library and use it in your videos. If you need a personal avatar, we can do that as well upon your request.</Typography>
                    </Box>
                    <Box
                        width={"70px"}
                        position={"absolute"}
                        zIndex={-1}
                        right={{ md: 0, sm: 100, xs: "-15%" }}
                        bottom={{ md: 0, sm: 50 }}
                    >
                        <img width={"100%"} src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT6flCb-tu9_lpyf08xtSYcKf79VvT60mbcE1PpYB_4HBKRYzzC" alt="" />
                    </Box>
                    <Box display={{ md: "flex", sm: "flex" }} justifyContent={"center"} alignItems={"center"}>
                        <ButtonComp title="Try GenieAi for free" onClick={() => navigate("/Dashboard/home")} />
                        <Link sx={{
                            display: "flex",
                            alignItems: "center",
                            textDecoration: "none",
                            color: "gray",

                            pl: 3,
                            mt: { md: 0, sm: 0, xs: 2 }
                        }}>
                            How it works <ChevronRight />
                        </Link>
                    </Box>

                </Box>
            </Container>
        </Box>
    )
}

export default Header
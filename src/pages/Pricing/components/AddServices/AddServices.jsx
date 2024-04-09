import { Box, Container, Grid, Typography } from '@mui/material'
import { ADD_SERVICES } from 'constant/contents'
import { UseContext } from 'context'
import React, { useContext } from 'react'

const AddServices = () => {
    const { mode } = useContext(UseContext)

    return (
        <Box py={{ md: 10, sm: 6, xs: 4 }}>
            <Container maxWidth="lg">
                <Typography
                    textAlign={"center"}
                    fontSize={{ md: "3em", sm: "2em" }}
                    fontWeight={"600"}>
                    Additional services
                </Typography>
                <Grid container spacing={{ md: 4, sm: 3, sx: 2 }} px={{ md: 2 }} textAlign={"center"}>
                    {ADD_SERVICES.map((service, i) => (
                        <Grid item md={4} sm={6} xs={12} mt={{ md: 5, sm: 3, xs: 2 }} key={i} >
                            <Box
                             bgcolor={mode === "light" ? "rgb(236, 237, 237)"
                             : "rgb(34,34,34)"}
                                height={"180px"}
                                borderRadius={"10px"}
                                border={"1px solid gray"}
                                p={4}
                                sx={{
                                    "&:hover": {
                                        boxShadow: "0 0 12px 1px lightGray"
                                    }
                                }}
                            >

                                <Typography my={1.5}>
                                    <span style={{ fontSize: "1.5em" }}> Item: </span> {service?.item}
                                </Typography>
                                <Typography>
                                    <span style={{ fontSize: "1.5em" }}> Price: </span>
                                    {service?.price}
                                </Typography>
                                <Typography mt={1}>
                                    <span style={{ fontSize: "1.5em" }}> Details: </span>
                                    {service?.desc}
                                </Typography>

                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>

    )
}

export default AddServices
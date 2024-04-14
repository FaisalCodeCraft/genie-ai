import { Box, Container, FormControl, Grid, OutlinedInput, TextField, Typography } from '@mui/material'
import ButtonComp from 'components/Button/Button'
import Layout from 'components/layout/Layout'
import { UseContext } from 'context'
import MuiPhoneNumber from 'mui-phone-number'
import React, { useContext } from 'react'

export const Contact = () => {
    const { mode } = useContext(UseContext)
    return (
        <Layout>
            <Box py={{ md: 10 }} >
                <Container maxWidth="md">
                    <Typography sx={{
                        fontSize: { md: "1.4em" },
                        fontWeight: "bold",
                        px: { md: 15 },
                        textAlign: "center",
                        pt: { md: 10 },


                    }}>Contact Us</Typography>
                    <Typography sx={{
                        fontSize: { md: "3em" },
                        fontWeight: "bold",
                        px: { md: 15 },
                        textAlign: "center",
                        lineHeight: { md: "60px" }
                    }}>We Want to Hear From You</Typography>
                    <Typography
                        py={{ md: 3 }}
                        textAlign={"center"}
                        px={{ md: 10 }}

                    >
                        Do you have any questions about our AI Human solution? Don’t hesitate to get in touch with us and we will get back to you as soon as possible!
                    </Typography>

                    <Grid container spacing={4}
                        bgcolor={mode === "light" ? "rgb(236, 237, 237)"
                            : "rgb(34,34,34)"}
                        px={{ md: 15 }} py={{ md: 10 }}
                        my={{ md: 5, sm: 4, xs: 3 }}
                        borderRadius={"10px"}
                        border={mode === "dark" && "2px solid gray"}
                        boxShadow={mode === "dark" && "0px 0px 8px gray"}
                    >
                        <Grid item md={6}>
                            <FormControl fullWidth variant="outlined">
                                <label style={{ marginBottom: "10px" }}>First Name</label>
                                <OutlinedInput
                                    variant="filled"
                                    id="outlined-adornment-weight"
                                    aria-describedby="outlined-weight-helper-text"
                                    sx={{
                                        backgroundColor: 'white',
                                        boxShadow: "inset 0px 0px 3px lightgray"
                                    }}
                                />
                            </FormControl>

                        </Grid>
                        <Grid item md={6}>
                            <FormControl fullWidth variant="outlined">
                                <label style={{ marginBottom: "10px" }}>Last Name</label>
                                <OutlinedInput
                                    sx={{
                                        backgroundColor: 'white',
                                        boxShadow: "inset 0px 0px 3px lightgray"
                                    }}
                                    id="outlined-adornment-weight"
                                    aria-describedby="outlined-weight-helper-text"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={6}>
                            <FormControl fullWidth variant="outlined">
                                <label style={{ marginBottom: "10px" }}>Email Address</label>
                                <OutlinedInput
                                    sx={{
                                        backgroundColor: 'white',
                                        boxShadow: "inset 0px 0px 3px lightgray"
                                    }}
                                    id="outlined-adornment-weight"
                                    aria-describedby="outlined-weight-helper-text"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={6}>
                           
                            <FormControl fullWidth>
                                <label style={{ marginBottom: "10px" }}>Phoner Number</label>
                                <MuiPhoneNumber
                                    sx={{
                                        borderRadius:"4px",
                                        backgroundColor: 'white',
                                        boxShadow: "inset 0px 0px 3px lightgray"
                                    }}
                                    defaultCountry={'us'} variant='outlined' />
                            </FormControl>
                        </Grid>

                        <Grid item md={12}>
                            <FormControl fullWidth variant="outlined">
                                <label style={{ marginBottom: "10px" }}>Comments</label>
                                <TextField
                                    sx={{
                                        borderRadius:"4px",
                                        backgroundColor: 'white',
                                        boxShadow: "inset 0px 0px 3px lightgray"
                                    }}
                                    multiline
                                    minRows={2}
                                    maxRows={5}
                                />
                            </FormControl>
                        </Grid>
                        <Box 
                        mt={{md:6,sm:4,xs:3}}
                        width={"100px"}
                         mx={"auto"}>
                            <ButtonComp title="Submit"/>
                        </Box>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}
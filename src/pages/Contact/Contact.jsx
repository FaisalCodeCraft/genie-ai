import { Box, Container, FormControl, Grid, InputAdornment, InputLabel, MenuItem, OutlinedInput, Select, TextField, TextareaAutosize, Typography } from '@mui/material'
import Layout from 'layout/Layout'
import MuiPhoneNumber from 'mui-phone-number'
import React from 'react'

export const Contact = () => {
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
                        bgcolor={"rgb(236, 237, 237)"}
                        px={{ md: 15 }} py={{ md: 10 }}
                        my={{ md: 5, sm: 4, xs: 3 }}
                        borderRadius={"10px"}
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
                                        boxShadow:"inset 0px 0px 3px lightgray"
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
                                        boxShadow:"inset 0px 0px 3px lightgray"
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
                                        boxShadow:"inset 0px 0px 3px lightgray"
                                    }}
                                    id="outlined-adornment-weight"
                                    aria-describedby="outlined-weight-helper-text"
                                />
                            </FormControl>
                        </Grid>
                        <Grid item md={6}>
                            {/*  <FormControl  fullWidth variant='outlined'>
                                <Select
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    defaultValue={"Pakistan"}
                                >
                                    <MenuItem value="Pakistan" disabled>
                                        <em>Pakistan</em>
                                    </MenuItem>
                                    <MenuItem >France</MenuItem>
                                    <MenuItem >USA</MenuItem>
                                    <MenuItem >Germany</MenuItem>
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item md={8}>
                            <FormControl  fullWidth variant="outlined">
                                <OutlinedInput
                                    id="outlined-adornment-weight"
                                    aria-describedby="outlined-weight-helper-text"
                                />
                            </FormControl> */}
                            <FormControl >
                                <label style={{ marginBottom: "10px" }}>Phoner Number</label>
                                <MuiPhoneNumber
                                    sx={{
                                        backgroundColor: 'white',
                                        boxShadow:"inset 0px 0px 3px lightgray"
                                    }}
                                    defaultCountry={'us'} variant='outlined' />
                            </FormControl>
                        </Grid>

                        <Grid item md={12}>
                            <FormControl fullWidth variant="outlined">
                                <label style={{ marginBottom: "10px" }}>Comments</label>
                                <TextField
                                    sx={{
                                        backgroundColor: 'white',
                                        boxShadow:"inset 0px 0px 3px lightgray"
                                    }}
                                    multiline
                                    minRows={2}
                                    maxRows={5}
                                />
                            </FormControl>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </Layout>
    )
}
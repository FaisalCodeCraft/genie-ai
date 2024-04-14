import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Box, Container, Grid, Typography } from '@mui/material'

const ProductQuality = () => {
    return (
        <Container maxWidth="lg" sx={{ mt: 10,px:{md:8,sm:10} }}>
            <Typography fontSize={".7em"}  color={"blue"} textAlign={"center"}>IF YOU'RE A MARKETING PROFESSIONAL, YOU KNOW THAT...</Typography>
            <Typography sx={{ fontSize: {md: '2em',sm:"1.5em",xs:"1.3em"} , textAlign:{md: "center"} }}>It's nearly impossible to create high-quality <br />product explainers on time and budget </Typography>
            <Grid container spacing={2}>
                <Grid item md={4} sm={6} xs={12}  mt={3}>
                    <Box
                        sx={{ border: "1px solid #e0e0e0", borderRadius: 1, "&:hover": { boxShadow: "2px 4px 9px #e0e0e0" } }}
                    >
                        <Typography sx={{ display: "flex", alignItems: 'center', justifyContent: "space-evenly", p: 1 }}>< CloseIcon fontSize='small' sx={{ color: "red", borderRadius: "50%", border: "1px solid red" }} />Outsourcing to 3rd parties</Typography>
                        <Typography fontSize={{ md: '14px' }} p={1} mx={1} color="grays">Working with 3rd parties is expensive, time consuming and limits your flexibility</Typography>
                    </Box>
                </Grid>
                <Grid item md={4} sm={6} xs={12} mt={3}>
                    <Box
                        sx={{ border: "1px solid #e0e0e0", borderRadius: 1, "&:hover": { boxShadow: "2px 4px 9px #e0e0e0" } }}
                    >
                        <Typography sx={{ display: "flex", alignItems: 'center', justifyContent: "space-evenly", p: 1 }}>< CloseIcon fontSize='small' sx={{ color: "red", borderRadius: "50%", border: "1px solid red" }} />Outsourcing to 3rd parties</Typography>
                        <Typography fontSize={{ md: '14px' }} p={1} mx={1} color="grays">Working with 3rd parties is expensive, time consuming and limits your flexibility</Typography>
                    </Box>
                </Grid>
                <Grid item md={4} sm={6} xs={12} mt={3}>
                    <Box
                        sx={{ border: "1px solid #e0e0e0", borderRadius: 1, "&:hover": { boxShadow: "2px 4px 9px #e0e0e0" } }}
                    >
                        <Typography sx={{ display: "flex", alignItems: 'center', justifyContent: "space-evenly", p: 1 }}>< CloseIcon fontSize='small' sx={{ color: "red", borderRadius: "50%", border: "1px solid red" }} />Outsourcing to 3rd parties</Typography>
                        <Typography fontSize={{ md: '14px' }} p={1} mx={1} color="grays">Working with 3rd parties is expensive, time consuming and limits your flexibility</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ProductQuality
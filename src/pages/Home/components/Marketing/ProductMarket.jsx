import React from 'react'
import { Box, Container, Grid, Link, Typography } from '@mui/material'
import ButtonComp from '../../../../components/Button/Button'
import { ArrowForward, ArrowRight } from '@mui/icons-material'


const ProductMarket = () => {
    return (
        <Box>
        <Container maxWidth="lg"   sx={{ mt: {md:18,xs:10} ,pl:{md:8,sm:10},pr:{md:0,sm:10}}}>
            <Grid container spacing={4}>
                <Grid item md={5.5} textAlign={'start'}>
                    <Typography
                        sx={{
                            fontSize: {md:"2.5em",sm:"2em",xs:"1.5em"} ,
                            
                        }}
                    >Create high-quality product explainers as easily as a slide deck</Typography>
                    <Typography
                        sx={{
                           my:3
                        }}
                    >Show your product’s unique capabilities with high-quality videos featuring AI Avatars — in over 120 languages.</Typography>
                    <Box sx={{ display: {md:"flex",sm:"flex"}, alignItems: "center", }}>
                        <ButtonComp title="Create a free AI Video"  />
                        <Link sx={{
                            textDecoration: "none",
                            color: "gray",
                            pl:1,
                            mt:{md:0,sm:0,xs:2},
                            fontSize:"small"
                        }}>
                            No credit card required.
                        </Link>
                    </Box>
                </Grid>
                <Grid item md={6.5}>
                    <img 
                    src="https://assets-global.website-files.com/61dc0796f359b6145bc06ea6/65b220c55ddf7f56617eca5e_UI-MARKETING.webp"
                    alt="Img"
                    width={"100%"}
                    height={"auto"}
                      />
                </Grid>
            </Grid>
        </Container>
        </Box>

    )
}

export default ProductMarket
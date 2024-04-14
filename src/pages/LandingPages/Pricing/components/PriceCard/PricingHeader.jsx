import React from 'react'
import { Box, Container, FormControlLabel, Switch, Typography } from '@mui/material'
import ButtonComp from 'components/Button/Button'

const PricingHeader = () => {
  return (
    <Box bgcolor={"rgb(236, 237, 237)"} py={{md:5,sm:3,xs:2}}>
     <Container maxWidth="lg" sx={{pt:10}}>
          <Typography
          sx={{
            fontSize:{md:"3em",sm:"2em",xs:"1.5em"},
            fontWeight:800,
            textAlign:"center",
            p:{md:5,sm:3,xs:2},
            width:{md:"50%"},
            display:"flex",
            justifyContent:'center',
            m:'auto',
            lineHeight:{md:"50px"},

          }}
          >Choose Your Pricing Plane!</Typography>
          <Typography textAlign={"center"} fontSize={{md:'18px'}} color={"gray"}>Start for free today. You have 1 free minute to test the solution.</Typography>
          <Box 
          sx={{
            width:"200px",
            mx:'auto',
            mt:{md:3,sm:2,xs:1},
            mb:{md:10,sm:5}
          }}
          >
            <ButtonComp title="Try Genei for Free"/>
          </Box>
          <Box
           textAlign={"center"}
           my={5}
           mb={5}
          >
            <lable>Billed monthly</lable>
          <FormControlLabel control={<Switch defaultChecked  sx={{mx:2}}/>} label="Billed annualy" />
          </Box>
     </Container>
    </Box>
  )
}

export default PricingHeader
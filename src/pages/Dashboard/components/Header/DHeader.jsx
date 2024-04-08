import { Settings } from '@mui/icons-material'
import { Box, Button, IconButton, TextField, Typography } from '@mui/material'
import React from 'react'

const DHeader = () => {
  return (
    <Box py={10} width={"100%"} >
      <Typography fontSize={{ md: "2.5em", sm: "2em", xs: "1.5em" }} textAlign={"center"}>
        Magically make videos with AI
      </Typography>
      <Typography fontSize={{ md: "1.2em", sm: "1em", xs: "1em" }} textAlign={"center"} py={2}>
        Meet GenieAI: a free way to make videos from text or images, powered by AI
      </Typography>

      <div>
        <TextField
          id="outlined-multiline-flexible"
          //   label="Multiline"
          placeholder='Describer Your Video...'
          multiline
          maxRows={10}
          fullWidth

          sx={{
            border: "1px solid white",
            borderRadius: "4px",
            boxShadow: "inset 0px 0px 1px 1px lightGray",
          }}
          inputProps={{
            style: {
              padding: "1em"
            }
          }}

        />
      </div>
      <Box display={"flex"} justifyContent={"space-between"}
        my={3}
        bgcolor={"black"}
        color={"white"}
        alignItems={"center"}
        borderRadius={"4px"}
        p={1}
      >
        <Box display={"flex"} >
          <IconButton>
            <Settings sx={{color:"white"}}/>
          </IconButton>
          <Button  sx={{color:"white"}}>Upload Image</Button >
          <Button sx={{color:"white"}}>Camera Motion</Button>
        </Box>
        <Button sx={{
          color: "white", bgcolor: "blue", "&:hover": {
            bgcolor: "blue"
          }
        }}>Submit</Button>
      </Box>
    </Box>
  )
}

export default DHeader
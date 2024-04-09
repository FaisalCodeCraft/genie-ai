import { Settings } from '@mui/icons-material'
import { Box, Button, IconButton, TextField,FormControl, Typography } from '@mui/material'
import React, { useState } from 'react'
import VideoModal from '../VideoModal/VideoModal';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const MakeVideos = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [promt, setPromt] = useState("")
  return (
    <Box py={10} width={"100%"} >
      <Typography fontSize={{ md: "2.5em", sm: "2em", xs: "1.5em" }} textAlign={"center"}>
        Magically make videos with AI
      </Typography>
      <Typography fontSize={{ md: "1.2em", sm: "1em", xs: "1em" }} textAlign={"center"} py={2}>
        Meet GenieAI: a free way to make videos from text or images, powered by AI
      </Typography>

      <FormControl fullWidth>
        <TextField
          onChange={(e) => setPromt(e.target.value)}
          id="outlined-multiline-flexible"
          //   label="Multiline"
          placeholder='Describer Your Video...'
          multiline
          maxRows={10}
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
      </FormControl>
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
            <Settings sx={{ color: "white" ,mr:3}} />
          </IconButton>
          <Button
            component="label"
            tabIndex={-1}
            startIcon={<CloudUploadIcon fontSize='small'/>}
            sx={{
              color: "white",
               "&:hover": {
                bgcolor: "blue",
                
              }
            }}
          >
            Upload file
            <VisuallyHiddenInput type="file" />
          </Button >
        </Box>
        <Button
          onClick={handleOpen}
          sx={{
            color: "white", bgcolor: "blue", "&:hover": {
              bgcolor: "blue"
            }
          }}>Submit</Button>
      </Box>
      <VideoModal open={open} promt={promt} onClose={handleClose} />
    </Box >
  )
}

export default MakeVideos 
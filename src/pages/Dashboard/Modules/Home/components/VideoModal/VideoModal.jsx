import * as React from 'react';
import { Box, TextField, FormControl, Typography } from '@mui/material'
import Modal from '@mui/material/Modal';
import { Close } from '@mui/icons-material';
import ButtonComp from 'components/Button/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { md: "78%", sm: "85%" },
  height: { md: "75vh", sm: "65vh" },
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  px:6
};

const VideoModal = (props) => {
  const { promt } = props || {}
  return (
    <Box >
      <Modal
        {...props}
        keepMounted
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Box
           textAlign={"left"}
           width={"50px"}
           ml={"auto"}
           mr={-3}
           mb={2}
           >
            <Close onClick={props.onClose} sx={{ color: "red" }} />
          </Box>
          <FormControl fullWidth>
            <TextField

              id="outlined-multiline-flexible"
              multiline
              maxRows={10}
              defaultValue={promt}

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
          <Box
            width={"110px"}
            mx={"auto"}
            py={5}
          >
            <ButtonComp title="Generate" />
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}
export default VideoModal;
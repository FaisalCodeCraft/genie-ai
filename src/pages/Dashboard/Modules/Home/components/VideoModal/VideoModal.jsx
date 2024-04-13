import * as React from 'react';
import {
  Box, TextField, FormControl,
  Grid,
  //  Typography,
  List,
  ListItem,
  ListItemButton
} from '@mui/material'
import Modal from '@mui/material/Modal';
import { Close, PlayCircle } from '@mui/icons-material';
import ButtonComp from 'components/Button/Button';
import { AVATERS_ACTORS } from 'constant/contents';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { md: "78%", sm: "85%" },
  height: { md: "85vh", sm: "65vh" },
  bgcolor: 'background.paper',
  boxShadow: 24,
  py: 2,
  px: 6,
  overflowY: "scroll",
  borderRadius: "15px",
  "::-webkit-scrollbar": {
    width: "8px",
  },
  "::-webkit-scrollbar-thumb": {
    background: "blue",
    borderRadius: "8px",
  },
};

const VideoModal = (props) => {

  const [avater, setAvater] = React.useState(AVATERS_ACTORS.ALL)
  const [actor, setActor] = React.useState()


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


          <Grid container spacing={2}>
            <Grid item md={3}
              my={2}
              borderRadius={"8px"}

            >
              <List disablePadding sx={{
                display: "flex",
                width: "100%",
                bgcolor: "rgb(236, 237, 237)",
                borderRadius: "8px"
              }}>
                <ListItem disablePadding disableGutters >
                  <ListItemButton
                    selected={avater === AVATERS_ACTORS.ALL}
                    onClick={() => setAvater(AVATERS_ACTORS.ALL)}
                    sx={{
                      px: 1,
                      borderRadius: "10px",
                      "&.Mui-selected": {
                        backgroundColor: "blue",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "blue",
                        }
                      },
                      "&:hover": {
                        backgroundColor: "transparent",
                      }
                    }}
                  >
                    All
                  </ListItemButton>


                </ListItem >
                <ListItem disablePadding disableGutters sx={{
                  mx: "10px",

                }}>
                  <ListItemButton
                    selected={avater === AVATERS_ACTORS.SEATED}
                    onClick={() => setAvater(AVATERS_ACTORS.SEATED)}
                    sx={{
                      px: 1,
                      borderRadius: "10px",
                      "&.Mui-selected": {
                        backgroundColor: "blue",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "blue",
                        }
                      },
                      "&:hover": {
                        backgroundColor: "transparent",
                      }

                    }}
                  >
                    Seated
                  </ListItemButton>
                </ListItem>
                <ListItem disablePadding disableGutters >
                  <ListItemButton
                    sx={{
                      px: 1,
                      borderRadius: "10px",
                      "&.Mui-selected": {
                        backgroundColor: "blue",
                        color: "white",
                        "&:hover": {
                          backgroundColor: "blue",
                        }
                      },
                      "&:hover": {
                        backgroundColor: "transparent",
                      }

                    }}
                  >
                    Custom
                  </ListItemButton>
                </ListItem>

              </List>
              <Grid container

                sx={{
                  height: "340px",
                  overflowY: "scroll",
                  borderRadius: "15px",
                  "::-webkit-scrollbar": {
                    width: "6px",
                  },
                  "::-webkit-scrollbar-thumb": {
                    background: "blue",
                    borderRadius: "8px",
                  },
                  mt: 3,
                  bgcolor: "rgb(236, 237, 237)"

                }}
                spacing={1}
              >
                {
                  avater.map((avater, i) => (
                    <Grid item md={3.9} key={i}
                    >

                      <img
                        onClick={() => setActor(avater)}

                        style={{
                          width: "70px",
                          height: "70px",
                          objectFit: "cover",
                          backgroundColor: "white",
                          border: "2px solid gray",
                          borderRadius: "50%",
                          cursor:"pointer"


                        }}
                        width={"100%"} src={avater} alt={`Avater_${i}`} />
                    </Grid>
                  ))
                }
              </Grid>
            </Grid>
            <Grid item md={6} >
              <Box width={{ md: "50%" }} height={{ md: "200px" }} mx={"auto"}
                my={2}
                sx={{
                  boxShadow: `
                rgba(174, 174, 192, 0.3) 5px 5px 10px 5px,
                            rgb(255, 255, 255) -5px -5px 10px 0px,
                             rgb(255, 255, 255) 2px 2px 4px 0px inset,
                            rgba(0, 0, 0, 0.1) -2px -2px 4px 0px inset;`
                }}
              >
                <img
                  style={{
                    objectFit: "cover",
                    backgroundColor: "rgb(236, 237, 237)",
                  }}
                  width={"100%"}
                  height={"100%"}
                  src={actor} alt="" />
              </Box>
              <Box
                bgcolor={"rgb(236, 237, 237)"}
                p={1}
                borderRadius={"10px"}
              >
                <Box display={"flex"}
                  justifyContent={"space-between"}
                  py={.5}
                >
                  <Box
                    component="button"
                    border={"none"}
                    color={"blue"}

                  >
                    Text Script
                  </Box>
                  <Box
                    component="button"
                    border={"none"}
                    display={"flex"}
                    alignItems={"center"}
                  >
                    <PlayCircle sx={{ color: "blue" }} />
                    Play Script
                  </Box>
                </Box>
                <Box
                  bgcolor={"white"}
                  display={"flex"}
                  justifyContent={"space-between"}
                  borderRadius={"8px"}
                  py={.5}
                >
                  <Box
                    component="button"
                    border={"none"}
                    color={"blue"}
                    bgcolor={"white"}
                  >
                    Text Script
                  </Box>
                  <Box
                    component="button"
                    border={"none"}
                    display={"flex"}
                    alignItems={"center"}
                    bgcolor={"white"}
                  >
                    <PlayCircle sx={{ color: "blue" }} />
                    Play Script
                  </Box>
                </Box>
                <FormControl fullWidth>
                  <TextField
                    placeholder='Describe Something...'
                    id="outlined-multiline-flexible"
                    multiline
                    maxRows={10}
                    defaultValue={promt}

                    sx={{
                      border: "1px solid white",
                      borderRadius: "4px",
                      boxShadow: "inset 0px 0px 1px 1px lightGray",
                      mt:1
                    }}
                    inputProps={{
                      style: {
                        padding: "1em"
                      }
                    }}

                  />
                </FormControl>
              </Box>
            </Grid>
          </Grid>
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
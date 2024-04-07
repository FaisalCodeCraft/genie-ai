import { Box, Button } from "@mui/material";
import React from "react";

const ButtonComp = (props) => {
  const btnSyle = {
    backgroundColor: "blue",
    color: "white",
    width:props.width ? props.width : "100%",
    py: "6px",
    borderRadius:2,
    transition: ".3s",
    "&:hover": {
      backgroundColor: "black",
    },
  };
  return (
    <Box >
      <Button sx={btnSyle}>{props.title}</Button>
    </Box>
  );
};

export default ButtonComp;



import React, { useContext } from 'react'
import { DarkMode, LightMode } from '@mui/icons-material'
import { ListItem } from '@mui/material'
import { UseContext } from '../../context';

const ToggleMode = (props) => {
    const { mode, toggleMode } = useContext(UseContext)

    return (
        <ListItem sx={{ cursor: "pointer", color:"black" }} onClick={toggleMode}>

            {
                mode === "light" ? <DarkMode /> : <LightMode />
            }
        </ListItem>
    )
}

export default ToggleMode;
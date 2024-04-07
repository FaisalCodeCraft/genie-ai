import { Box } from '@mui/material'
import React, { createContext, useState } from 'react'


export const UseContext = createContext()
const ContextProvider = ({ children }) => {

    const [mode, setMode] = useState("light")
    const toggleMode = () => {
        setMode(mode === "light" ? "dark" : "light")
    }
 
    return (
        <UseContext.Provider value={{  mode, setMode, toggleMode }}>
            <Box bgcolor={mode === "light" ? "white)" : "#212121"}
                color={mode === "light" ? "black" : "white"}
                sx={{ transition: "all .7s ease" }}
            >
                {children}
            </Box>
        </UseContext.Provider>
    )
}

export default ContextProvider
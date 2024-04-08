import Dlayput from 'components/Dlayout/Dlayput'
import React from 'react'
import DHeader from './components/Header/DHeader'
import { Box } from '@mui/material'

const Dashboard = () => {
  return (
    <Box>
    <Dlayput>
        <DHeader/>
    </Dlayput>
    </Box>
  )
}

export default Dashboard
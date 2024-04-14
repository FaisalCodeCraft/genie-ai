import { Box } from '@mui/material'
import React from 'react'
import Header from './components/Header/Header'
import ProductMarket from './components/Marketing/ProductMarket'
import ProductQuality from './components/QualityProduct/ProductQuality'
import CreateAvater from './components/CreateAvater/CreateAvater'
import AiAvater from './components/AiAvater/AiAvater'
import UseAvater from './components/UseAvater/UseAvater'
import ReadyToBuilding from './components/ReadyToBuilding/ReadyToBuilding'
import Layout from 'components/layout/Layout'

const Home = () => {
  return (
    <Box>
      <Layout>
        <Header />
        <ProductMarket />
        <ProductQuality />
        <CreateAvater />
        <AiAvater />
        <UseAvater />
        <ReadyToBuilding />
      </Layout>
    </Box>
  )
}

export default Home
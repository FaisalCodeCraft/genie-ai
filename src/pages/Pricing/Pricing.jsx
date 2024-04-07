import React from 'react'
import Layout from 'layout/Layout'
import PricingCustomAvators from './components/PricingCustomAvators/PricingCustomAvators'
import PricingPakage from './components/Pakage/PakageCard'
import AddServices from './components/AddServices/AddServices'
import PricingHeader from './components/PriceCard/PricingHeader'

const Pricing = () => {
  return (
    <Layout>
          <PricingHeader/>
          <PricingPakage/>
          <AddServices/>
          <PricingCustomAvators/>
    </Layout>
  )
}

export default Pricing
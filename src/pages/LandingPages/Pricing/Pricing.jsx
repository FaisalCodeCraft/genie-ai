import React from 'react'
import PricingCustomAvators from './components/PricingCustomAvators/PricingCustomAvators'
import PricingPakage from './components/Pakage/PakageCard'
import AddServices from './components/AddServices/AddServices'
import PricingHeader from './components/PriceCard/PricingHeader'
import Layout from 'components/layout/Layout'

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
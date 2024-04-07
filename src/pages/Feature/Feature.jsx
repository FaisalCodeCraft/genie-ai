import React from 'react'
import Layout from 'layout/Layout'
import FeatureCards from './components/FeaturedCard/FeatureCards'
import ArtToVideo from './components/ArtToVideo/ArtToVideo'

const Feature = () => {
  return (
    <div>
        <Layout>
            <FeatureCards/>
            <ArtToVideo/>
        </Layout>
    </div>
  )
}

export default Feature
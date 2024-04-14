import React from 'react'
import FeatureCards from './components/FeaturedCard/FeatureCards'
import ArtToVideo from './components/ArtToVideo/ArtToVideo'
import Layout from 'components/layout/Layout'

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
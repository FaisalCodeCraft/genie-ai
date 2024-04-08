import React from 'react'
import AboutHeader from './components/Header/AboutHeader'
import OurMission from './components/OurMission/OurMission'
import Layout from 'components/layout/Layout'

const About = () => {
  return (
    <Layout>
      <AboutHeader/>
      <OurMission/>
    </Layout>
  )
}

export default About
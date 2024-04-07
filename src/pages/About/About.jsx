import Layout from 'layout/Layout'
import React from 'react'
import AboutHeader from './components/Header/AboutHeader'
import OurMission from './components/OurMission/OurMission'

const About = () => {
  return (
    <Layout>
      <AboutHeader/>
      <OurMission/>
    </Layout>
  )
}

export default About
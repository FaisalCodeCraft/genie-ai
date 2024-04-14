import React from 'react'
import AboutHeader from './components/Header/AboutHeader'
import OurMission from './components/OurMission/OurMission'
import Layout from 'components/layout/Layout'
import AiTechnology from './components/AiTechnology/AiTechnology'

const About = () => {
  return (
    <Layout>
      <AboutHeader />
      <AiTechnology />
      <OurMission />
    </Layout>
  )
}

export default About
import Dlayput from 'components/Dlayout/Dlayput'
import React from 'react'
import MakeVideos from './components/MakeVideos/MakeVideos'

const DashHome = () => {
  return (
    <Dlayput title="Home" >
      <MakeVideos />
    </Dlayput>
  )
}

export default DashHome
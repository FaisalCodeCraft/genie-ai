import { ROUTES } from 'constant/routes'
import CreateAvater from 'pages/Dashboard/Modules/CreateAvater/CreateAvater'
import DeleteVideos from 'pages/Dashboard/Modules/DeleteVideos/DeleteVideos'
import DashHome from 'pages/Dashboard/Modules/Home/DashHome'
import Videos from 'pages/Dashboard/Modules/Videos/Videos'
import About from 'pages/LandingPages/About/About'
import { Contact } from 'pages/LandingPages/Contact/Contact'
import Feature from 'pages/LandingPages/Feature/Feature'
import Help from 'pages/LandingPages/Help/Help'
import Home from 'pages/LandingPages/Home/Home'
import Pricing from 'pages/LandingPages/Pricing/Pricing'
import UseCases from 'pages/LandingPages/UseCases/UseCases'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

const Routers = () => {
  return (
    <Routes>
    <Route path={ROUTES.PAGES.HOME} element={<Home />} />
    <Route path={ROUTES.PAGES.FEATURES} element={<Feature />} />
    <Route path={ROUTES.PAGES.PRICING} element={<Pricing />} />
    <Route path={ROUTES.PAGES.USECASES} element={<UseCases />} />
    <Route path={ROUTES.PAGES.ABOUT} element={<About />} />
    <Route path={ROUTES.PAGES.CONTACT} element={<Contact />} />
    <Route path={ROUTES.PAGES.HELP} element={<Help />} />
    {/* Dashboard modules */}
    <Route path={ROUTES.PAGES.DASHBOARD.HOME} element={<DashHome />}> </Route>
    <Route path={ROUTES.PAGES.DASHBOARD.VIDEOS} element={<Videos />}> </Route>
    <Route path={ROUTES.PAGES.DASHBOARD.CREATEAVATER} element={<CreateAvater />}> </Route>
    <Route path={ROUTES.PAGES.DASHBOARD.DELETEVIDEOS} element={<DeleteVideos />}> </Route>
  </Routes>
  )
}

export default Routers
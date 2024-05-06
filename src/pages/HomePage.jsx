import React from 'react'
import NavigationBar from '../components/NavigationBar'
import HeroSection from '../components/HeroSection'
import IntroAbout from '../components/IntroAbout'
import FooterSection from '../components/FooterSection'

const HomePage = () => {
  return (
    <>
      <NavigationBar/>
      <HeroSection/>
      <IntroAbout/>
      <FooterSection/>
    </>
  )
}

export default HomePage
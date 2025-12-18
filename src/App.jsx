import { useState } from 'react'
import './App.css'
import Header from './components/layouts/Header'
import Hero from './components/sections/Hero'
import Spotlight from './components/sections/Spotlight'
import Services from './components/sections/Services'
import Partner from './components/sections/Partner'
import JoinOurTeam from './components/sections/JoinOurTeam'
import InsightsSection from './components/sections/InsightsSection'
import NewsletterSection from './components/sections/NewsletterSection'
import Collaboration from './components/sections/Collaboration'
import Footer from './components/layouts/Footer'

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Spotlight />
      <Services />
      <Partner />
      <JoinOurTeam />
      <InsightsSection />
      <NewsletterSection />
      <Collaboration />
      <Footer />
    </>
  )
}

export default App

import React from 'react'
import Portfolio from './pages/Portfolio'
import SkillsSection from './pages/SkillSection'
import ProjectSection from './pages/Project'
import ContactSection from './pages/ContactSection'
import Footer from './pages/Footer'

const App = () => {
  return (
    <div>
        <Portfolio />
        <SkillsSection />
        <ProjectSection />
        <ContactSection />
        <Footer />
    </div>
  )
}

export default App
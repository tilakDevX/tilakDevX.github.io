import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import WhatIBuild from '../components/sections/WhatIBuild'
import Experience from '../components/sections/Experience'
import Projects from '../components/sections/Projects'
import CaseStudies from '../components/sections/CaseStudies'
import Skills from '../components/sections/Skills'
import Blog from '../components/sections/Blog'
import GitHub from '../components/sections/GitHub'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <div className="min-h-screen bg-navy">
      <Navbar />
      <Hero />
      <WhatIBuild />
      <Experience />
      <Projects />
      <CaseStudies />
      <Skills />
      <Blog />
      <GitHub />
      <Contact />
      <Footer />
    </div>
  )
}

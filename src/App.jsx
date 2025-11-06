import React from 'react'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import ThemeToggle from './components/ThemeToggle'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/TechnicalSkills'
import Blog from './components/Blog'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-amber-300 text-2xl'>
      <Navbar/>
      <Hero/>
      <About/>
      <Education/>
      <Experience/>
      <Projects/>
      <Skills/>
      <ThemeToggle/>
       <Testimonials/>
       <Blog/>
       <Contact/>
       <Footer/>
    </div>
  )
}

export default App

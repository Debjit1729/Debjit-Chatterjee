import React from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import About from './components/About'
import Project from './components/Project'
import Skills from './components/Skills'
import Achievements from './components/Achievements'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'

const App = () => {
  return (
    <main className='overflow-x-hidden bg-black tracking-tighter text-gray-200 antialiased'>
        <Navbar />
        <HeroSection />
        <About />
        <Project />
        <Skills />
        <Achievements />
        <ContactForm />
        <Footer />
    </main>
  )
}

export default App

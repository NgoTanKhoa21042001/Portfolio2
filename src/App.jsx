/* eslint-disable no-unused-vars */
// import components
import { useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Service from './components/Services'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Hireme from './components/Hireme'
import Contact from './components/Contact'
import Navbar from './Layouts/Navbar'
// ANimation
import AOS from 'aos'
import 'aos/dist/aos.css' // You can also use <link> for styles

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1800,
      offset: 100,
      disable: 'mobile'
    })
  })
  return (
    <div className=''>
      <Navbar />
      <Hero />
      <Skills />
      <Service />
      <Projects />
      <Testimonials />
      <Hireme />
      <Contact />
      <footer className='text-center'>
        <h6 className='mb-3'>Ngo Tan Khoa</h6>
        <p>tankhoa @ All CopyRights Reversed 2023</p>
      </footer>
    </div>
  )
}

export default App

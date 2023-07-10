// import components
import Hero from './components/Hero'
import Skills from './components/Skills'
import Service from './components/Services'
import Projects from './components/Projects'
import Testimonials from './components/Testimonials'
import Hireme from './components/Hireme'
import Contact from './components/Contact'
import Navbar from './Layouts/Navbar'

const App = () => {
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

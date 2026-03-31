import { useState } from 'react'
import Hero from "./components/Hero"
import Services from './components/Services'
import Navbar from "./components/Navbar"
import Portfolio from './components/Portfolio'
import About from './components/About'
import Reviews from './components/Reviews'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'




function App() {
  const [count, setCount] = useState(0)

  return (
    <main className='overflow-x-hidden antialiased text-white '>
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Reviews />
      <ContactUs />
      <Footer />
    </main>
  )
}

export default App

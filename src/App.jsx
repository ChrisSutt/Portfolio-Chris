import { useState } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Project'
import Contact from './components/Contact'
import Navbar from './components/Navbar'
import './index.css';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* Navbar Section */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Project Section */}
      <Projects />
      {/* Contact Section */}

      <Contact />
      </>
  );
}

export default App

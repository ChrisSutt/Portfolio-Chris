import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import GlobalStyle from './styles/global'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Project'
import Contact from './components/Contact'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

      {/* Global Styles */}
      <GlobalStyle />

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

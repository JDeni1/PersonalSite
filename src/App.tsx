import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import { Home, Projects } from './components/Pages'


export default function App() {
  const currentTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
  const [theme, setTheme] = React.useState<'light' | 'dark'>(currentTheme || 'light')

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  )
}
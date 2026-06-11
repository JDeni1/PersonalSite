import React, { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'

function App() {
  const currentTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
  const [theme, setTheme] = React.useState<'light' | 'dark'>(currentTheme || 'light')

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App
import React from 'react'
import './Navbar.css'
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import toggle_light from '../../assets/night.png'
import toggle_dark from '../../assets/day.png'

type NavbarProps = {
    theme: 'light' | 'dark'
    setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>
}

const Navbar = ({ theme, setTheme }: NavbarProps) => {

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

  return (
    <div className="Navbar">
        <img src={theme === 'light' ? logo_light : logo_dark} alt="logo" className="logo" />

        {/* Navigation Links */}
        <ul className="nav-links">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
        </ul> 

        <img onClick={toggleTheme} src={theme === 'light' ? toggle_light : toggle_dark} alt="theme toggle" className="theme-toggle" />
    </div>
  )
}

export default Navbar
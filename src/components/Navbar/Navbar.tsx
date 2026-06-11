import React from 'react'
import './Navbar.css'
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import toggle_light from '../../assets/night.png'
import toggle_dark from '../../assets/day.png'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

type NavbarProps = {
    theme: 'light' | 'dark'
    setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>
}

const tabs = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
]

const Navbar = ({ theme, setTheme }: NavbarProps) => {
    const location = useLocation()

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    return (
        <div className="Navbar">
            <img
                src={theme === 'light' ? logo_light : logo_dark}
                alt="logo"
                className="logo"
            />

            <ul className="nav-links">
                {tabs.map((tab) => {
                    const isActive = location.pathname === tab.path
                    return (
                        <li key={tab.path} className="nav-item">
                            <NavLink
                                to={tab.path}
                                className={`nav-link ${isActive ? 'active' : ''}`}
                            >
                                {isActive && (
                                    <motion.div
                                        className="active-tab"
                                        layoutId="active-tab"
                                        transition={{
                                            type: 'spring',
                                            stiffness: 400,
                                            damping: 35,
                                        }}
                                    />
                                )}
                                {tab.label}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>

            <motion.img
                onClick={toggleTheme}
                src={theme === 'light' ? toggle_light : toggle_dark}
                alt="theme toggle"
                className="theme-toggle"
                whileHover={{ scale: 1.1 }}
                whileTap={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
            />
        </div>
    )
}

export default Navbar
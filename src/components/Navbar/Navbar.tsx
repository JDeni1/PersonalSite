import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo_light from '../../assets/logo-black.png'
import logo_dark from '../../assets/logo-white.png'
import toggle_light from '../../assets/night.png'
import toggle_dark from '../../assets/day.png'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

type NavbarProps = {
    theme: 'light' | 'dark'
    setTheme: React.Dispatch<React.SetStateAction<'light' | 'dark'>>
}

const tabs = [
    { label: 'Home', path: '/', sectionId: 'home' },
    { label: 'About', path: '/', sectionId: 'about' },
    { label: 'Projects', path: '/projects' },
]

const Navbar = ({ theme, setTheme }: NavbarProps) => {
    const location = useLocation()
    const navigate = useNavigate()
    const [activeSection, setActiveSection] = useState('home')

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light')
    }

    const scrollToSection = (sectionId: string) => {
        const el = document.getElementById(sectionId)
        el?.scrollIntoView({ behavior: 'smooth' })
    }

    const handleClick = (
        e: React.MouseEvent,
        tab: typeof tabs[number]
    ) => {
        if (!tab.sectionId) return // Projects: normal routing

        e.preventDefault()
        setActiveSection(tab.sectionId)

        if (location.pathname !== '/') {
            navigate('/')
            setTimeout(() => scrollToSection(tab.sectionId!), 100)
        } else {
            scrollToSection(tab.sectionId)
        }
    }

    // Watch which section is currently visible while on "/"
    useEffect(() => {
        if (location.pathname !== '/') return

        const homeEl = document.getElementById('home')
        const aboutEl = document.getElementById('about')
        if (!homeEl || !aboutEl) return

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveSection(entry.target.id)
                    }
                })
            },
            { threshold: 0.5 } // section counts as "active" once 50% visible
        )

        observer.observe(homeEl)
        observer.observe(aboutEl)

        return () => observer.disconnect()
    }, [location.pathname])

    const getIsActive = (tab: typeof tabs[number]) => {
        if (tab.path === '/projects') {
            return location.pathname === '/projects'
        }
        if (location.pathname !== '/') return false
        return activeSection === tab.sectionId
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
                    const isActive = getIsActive(tab)

                    return (
                        <li key={tab.label} className="nav-item">
                            <NavLink
                                to={tab.path}
                                onClick={(e) => handleClick(e, tab)}
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
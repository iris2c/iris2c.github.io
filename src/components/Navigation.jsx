import React, { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import './Navigation.css'

function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-logo" onClick={() => scrollToSection('introduction')}>
          Homepage
        </div>
        <div className="nav-right">
          <div className="nav-links">
            <button onClick={() => scrollToSection('publications')}>{t.nav.research}</button>
            <button onClick={() => scrollToSection('activities')}>{t.nav.activities}</button>
            <button onClick={() => scrollToSection('github')}>{t.nav.github}</button>
            <button onClick={() => scrollToSection('news')}>{t.nav.news}</button>
          </div>
          <button className="language-switch" onClick={toggleLanguage}>
            {language === 'zh' ? 'EN' : '中文'}
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation


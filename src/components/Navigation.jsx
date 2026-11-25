import { useEffect, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import './Navigation.css'

const sections = [
  { id: 'introduction', en: 'Profile', zh: '简介' },
  { id: 'activities', en: 'Education', zh: '学术背景' },
  { id: 'publications', en: 'Publications', zh: '论文' },
  { id: 'news', en: 'News', zh: '动态' },
]

export default function Navigation() {
  const { language, toggleLanguage } = useLanguage()
  const [current, setCurrent] = useState('introduction')
  const english = language === 'en'

  useEffect(() => {
    const elements = sections.map(({ id }) => document.getElementById(id))
    function update() {
      const page = document.documentElement
      const atBottom = window.scrollY > 0 && window.scrollY + window.innerHeight >= page.scrollHeight - 2
      if (atBottom) {
        setCurrent(sections.at(-1).id)
        return
      }
      const navHeight = document.querySelector('.masthead').offsetHeight
      const visible = elements.filter(el => el && el.getBoundingClientRect().top <= navHeight + 64)
      setCurrent(visible.at(-1)?.id ?? 'introduction')
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <header className="masthead">
      <div className="shell masthead-inner">
        <a className="signature" href="#introduction">
          <img src="/logo.png" width="26" height="38" alt="" />
          <span>{translations[language].name}</span>
        </a>
        <nav className="section-nav" aria-label={english ? 'Main navigation' : '主导航'}>
          {sections.map(({ id, ...label }) => (
            <a key={id} href={'#' + id} aria-current={current === id ? 'location' : undefined}>
              {label[language]}
            </a>
          ))}
        </nav>
        <button type="button" className="locale-button" onClick={toggleLanguage}
          lang={english ? 'zh-CN' : 'en'} aria-label={english ? '切换到中文' : 'Switch to English'}>
          <span className="globe" aria-hidden="true">◎</span>{english ? '中文' : 'English'}
        </button>
      </div>
    </header>
  )
}

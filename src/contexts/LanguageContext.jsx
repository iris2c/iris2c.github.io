import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from '../translations'

const LanguageContext = createContext(null)

function preferredLanguage() {
  const requested = new URLSearchParams(window.location.search).get('lang')
  if (requested === 'en' || requested === 'zh') return requested

  // Honor the old site's saved preference, including when storage is unavailable.
  try {
    const previous = window.localStorage.getItem('language')
    if (previous === 'en' || previous === 'zh') return previous
  } catch {
    // The browser language also works in private or storage-restricted contexts.
  }
  return navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en'
}

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(preferredLanguage)

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en'
    document.title = language === 'zh'
      ? `${translations.zh.name}｜个人主页`
      : 'Chong Zhang (Iris) — Academic Homepage'
  }, [language])

  useEffect(() => {
    const restoreLanguage = () => setLanguage(preferredLanguage())
    window.addEventListener('popstate', restoreLanguage)
    return () => window.removeEventListener('popstate', restoreLanguage)
  }, [])

  function toggleLanguage() {
    const next = language === 'zh' ? 'en' : 'zh'
    const url = new URL(window.location.href)
    url.searchParams.set('lang', next)
    window.history.replaceState(window.history.state, '', url)
    setLanguage(next)
  }

  return <LanguageContext.Provider value={{ language, toggleLanguage }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}

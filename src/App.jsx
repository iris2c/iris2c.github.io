import { LanguageProvider, useLanguage } from './contexts/LanguageContext'
import Navigation from './components/Navigation'
import Introduction from './components/Introduction'
import Publications from './components/Publications'
import AcademicActivities from './components/AcademicActivities'
import LatestNews from './components/LatestNews'
import Statement from './components/Statement'
import './App.css'

function Portfolio() {
  const { language } = useLanguage()
  return (
    <>
      <a className="skip-link" href="#main">{language === 'en' ? 'Skip to content' : '跳至正文'}</a>
      <Navigation />
      <main id="main" tabIndex="-1">
        <Introduction />
        <AcademicActivities />
        <Publications />
        <LatestNews />
      </main>
      <Statement />
    </>
  )
}

export default function App() {
  return <LanguageProvider><Portfolio /></LanguageProvider>
}

import React from 'react'
import { LanguageProvider } from './contexts/LanguageContext'
import Introduction from './components/Introduction'
import Publications from './components/Publications'
import AcademicActivities from './components/AcademicActivities'
import GitHubContributions from './components/GitHubContributions'
import LatestNews from './components/LatestNews'
import Navigation from './components/Navigation'
import './App.css'

function App() {
  return (
    <LanguageProvider>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <Introduction />
          <LatestNews />
          <Publications />
          <AcademicActivities />
          <GitHubContributions />
        </main>
      </div>
    </LanguageProvider>
  )
}

export default App


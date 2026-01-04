import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import './Introduction.css'

function Introduction() {
  const { language } = useLanguage()
  const t = translations[language]

  const educationData = {
    zh: {
      phd: '博士，新加坡国立大学',
      msc: '硕士，新加坡国立大学',
      beng: '学士，哈尔滨工业大学',
      supervisors: '导师：陈家进讲座教授（IEEE Fellow）和李海洲讲席教授（IEEE Fellow, ISCA Fellow, FSEng）'
    },
    en: {
      phd: 'Ph.D., National University of Singapore',
      msc: 'M.Sc., National University of Singapore',
      beng: 'B.Eng, Harbin Institute of Technology',
      supervisors: 'Supervisors: Chair Professor Tan Kay Chen (IEEE Fellow) and Presidential Chair Professor Li Haizhou (IEEE Fellow, ISCA Fellow, FSEng)'
    }
  }

  const edu = educationData[language]

  return (
    <section id="introduction" className="section introduction">
      <div className="section-content">
        <h1 className="hero-title">Chong ZHANG</h1>
        <p className="hero-subtitle">{t.introduction.subtitle}</p>
        <p className="hero-description">
          {t.introduction.description}
        </p>

        <div className="hero-links">
          <a href="https://scholar.google.com.sg/citations?user=nqcBaoYAAAAJ&hl=en" className="link-button" target="_blank" rel="noopener noreferrer">Google Scholar</a>
          <a href="https://www.linkedin.com/in/ichongzhang/" className="link-button secondary" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://orcid.org/0000-0002-2162-4344" className="link-button secondary" target="_blank" rel="noopener noreferrer">ORCiD</a>
          <a href="mailto:chong.zhang@alibaba-inc.com" className="link-button secondary">{t.introduction.contact}</a>
        </div>

        <div className="education-section">
          <h3 className="education-title">{t.introduction.education}</h3>
          <div className="education-list">
            <div className="education-item">
              <div className="education-year">2013 - 2018</div>
              <div className="education-content">
                <div className="education-degree">{edu.phd}</div>
                <div className="education-supervisors">{edu.supervisors}</div>
              </div>
            </div>
            <div className="education-item">
              <div className="education-year">2011 - 2012</div>
              <div className="education-content">
                <div className="education-degree">{edu.msc}</div>
              </div>
            </div>
            <div className="education-item">
              <div className="education-year">2007 - 2011</div>
              <div className="education-content">
                <div className="education-degree">{edu.beng}</div>
              </div>
            </div>
          </div>
        </div>


      </div>
    </section>
  )
}

export default Introduction


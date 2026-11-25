import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import './Statement.css'

const linkedIn = 'https://www.linkedin.com/in/ichongzhang/'
const orcid = 'https://orcid.org/0000-0002-2162-4344'
const githubPages = 'https://docs.github.com/en/pages/getting-started-with-github-pages/what-is-github-pages#data-collection'
const githubPrivacy = 'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement'

export default function Statement() {
  const { language } = useLanguage()
  const copy = translations[language].footer

  return (
    <footer id="statement" className="profile-footer">
      <div className="footer-inner shell">
        <p className="footer-signature">© {translations[language].name}</p>
        <nav className="footer-profiles" aria-label={copy.contact}>
          <a href={linkedIn} rel="noreferrer">LinkedIn</a>
          <a href={orcid} rel="noreferrer">ORCID</a>
        </nav>
        <details className="privacy-disclosure">
          <summary>{copy.privacy}</summary>
          <div className="privacy-body">
            <h2>{copy.visitors}</h2>
            <p>{copy.summary}</p>
            <p className="policy-links">
              <a href={githubPages} rel="noreferrer">{copy.hosting}</a>
              <a href={githubPrivacy} rel="noreferrer">{copy.hostingPolicy}</a>
            </p>
            <h2>{copy.personal}</h2>
            <p>{copy.personalDetails}</p>
            <h2>{copy.rights}</h2>
            <p>{copy.rightsDetails}</p>
            <p>{copy.corrections} <a href={linkedIn} rel="noreferrer">{copy.correctionLink}</a></p>
          </div>
        </details>
      </div>
    </footer>
  )
}

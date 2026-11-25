import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import './AcademicActivities.css'

export default function AcademicActivities() {
  const { language } = useLanguage()
  const copy = translations[language].background

  return (
    <section className="academic-background shell" id="activities" aria-labelledby="background-title">
      <h2 id="background-title">{copy.title}</h2>
      <div className="background-columns">
        <div>
          <h3 className="kicker">{copy.education}</h3>
          <ul className="degree-list">
            {copy.degrees.map(({ years, degree, school, supervisors }) => (
              <li key={years}>
                <span className="degree-years">{years}</span>
                <div>
                  <p className="degree-name">{degree}</p>
                  <p className="school-name">{school}</p>
                  {supervisors && (
                    <dl className="degree-supervisors">
                      <dt>{copy.supervisors}</dt>
                      {supervisors.map(name => <dd key={name} lang="en">{name}</dd>)}
                    </dl>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="kicker">{copy.service}</h3>
          <dl className="service-list">
            {copy.roles.map(({ name, description }) => (
              <div key={name}>
                <dt>{name}</dt>
                <dd>{description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}

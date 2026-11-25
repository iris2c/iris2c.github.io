import { useLanguage } from '../contexts/LanguageContext'
import { newsItems } from '../data/news'
import { translations } from '../translations'
import './LatestNews.css'

function formatDate(date, language) {
  const options = { year: 'numeric', timeZone: 'UTC' }
  if (date.length >= 7) options.month = 'short'
  if (date.length === 10) options.day = 'numeric'
  return new Intl.DateTimeFormat(language, options).format(new Date(date))
}

export default function LatestNews() {
  const { language } = useLanguage()

  return (
    <section id="news" className="research-updates shell" aria-labelledby="updates-title">
      <h2 id="updates-title" className="display-heading">{translations[language].news.title}</h2>
      <ol className="news-list" role="list">
        {newsItems.map((item) => {
          const { title, description, url: localizedUrl } = item[language]
          const url = localizedUrl ?? item.url
          return (
            <li key={item.date + item.en.title}>
              <time dateTime={item.date}>{formatDate(item.date, language)}</time>
              <div className="news-entry">
                <h3>{url ? <a href={url} rel="noreferrer">{title}</a> : title}</h3>
                {description && <p>{description}</p>}
              </div>
            </li>
          )
        })}
      </ol>
    </section>
  )
}

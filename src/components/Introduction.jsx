import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import './Introduction.css'

const copy = {
  en: {
    name: translations.en.name, alias: 'Iris',
    intro: 'My research interests include speech recognition, speech large language model, multimodal representation learning, artificial intelligence, computational intelligence.',
    company: 'AISpeech', member: 'IEEE Senior Member', publications: 'View publications',
  },
  zh: {
    name: '张冲', alias: 'Iris',
    intro: '从事语音识别、语音大模型、多模态表征学习、人工智能、计算智能相关研究',
    company: '思必驰科技股份有限公司', member: 'IEEE 高级会员', publications: '查看论文',
  },
}

export default function Introduction() {
  const { language } = useLanguage()
  const t = copy[language]
  return (
    <section id="introduction" className="profile" aria-labelledby="profile-name">
      <picture className="profile-art" aria-hidden="true">
        <source media="(max-width: 680px)" srcSet="/images/glass-wave-small.webp" />
        <img src="/images/glass-wave.webp" alt="" width="1800" height="668" fetchpriority="high" />
      </picture>
      <div className="shell profile-inner">
        <div className="profile-copy">
          <h1 id="profile-name" className="profile-identity">
            <span>{t.name}</span>{' '}
            <span className="profile-alias">{t.alias}</span>
          </h1>
          <p className="affiliation">
            <span>{t.company}</span>
            <span>{t.member}</span>
          </p>
          <p className="bio">{t.intro}</p>
          <div className="profile-links">
            <a className="button primary" href="#publications">{t.publications}</a>
            <a className="button secondary" href="https://scholar.google.com.sg/citations?user=nqcBaoYAAAAJ&amp;hl=en" lang="en">Google Scholar</a>
          </div>
        </div>
      </div>
    </section>
  )
}

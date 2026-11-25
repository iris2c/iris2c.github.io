import { Fragment, useState } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { publications } from '../data/publications'
import './Publications.css'

const labels = {
  en: {
    eyebrow: 'Bibliography',
    selected: 'Selected Publication',
    archive: 'Publication',
    showAll: `View all ${publications.length} publications`,
    showSelected: 'Show selected publications',
    paper: 'Paper',
    code: 'Code repository',
    demo: 'Demo',
    citations: 'Google Scholar citations',
    asOf: 'as of',
    impactFactor: 'TNNLS journal impact factor',
    equal: 'Equal contribution',
  },
  zh: {
    eyebrow: '学术成果',
    selected: '代表论文',
    archive: '学术论文',
    showAll: `查看全部 ${publications.length} 篇论文`,
    showSelected: '仅看代表论文',
    paper: '阅读论文',
    code: '代码库',
    demo: '演示',
    citations: 'Google Scholar 被引次数',
    asOf: '截至',
    impactFactor: 'TNNLS 期刊影响因子',
    equal: '共同一作',
  },
}

const selected = publications
  .filter((paper) => paper.selectedOrder !== undefined)
  .sort((a, b) => a.selectedOrder - b.selectedOrder)

function BylineNames({ names, separator = ', ' }) {
  return names.map((name, index) => {
    const author = name.replace(/\*+$/, '')
    const isOwner = author === '张冲' || author === 'Chong Zhang'
    return (
      <Fragment key={index}>
        {index > 0 && separator}
        {isOwner ? (
          <><strong>{author}</strong>{name.slice(author.length)}</>
        ) : name}
      </Fragment>
    )
  })
}

function PublicationRow({ paper, text }) {
  const resources = [
    [paper.link, text.paper],
    [paper.codeLink, text.code],
    [paper.demoLink, text.demo],
  ]

  return (
    <li className="publication-row">
      <time className="publication-year" dateTime={String(paper.year)}>{paper.year}</time>
      <div className="publication-entry">
        <p className="publication-venue" lang="en">{paper.venue}</p>
        <h3 className="publication-name" lang="en">{paper.title}</h3>
        <p className="publication-authors" lang="en">
          <BylineNames names={paper.authors.split(', ')} />
        </p>
        {paper.equalContribution && <p className="publication-credit">* {text.equal}</p>}
        {(paper.citations || paper.impactFactor) && (
          <p className="publication-metrics">
            {paper.citations && (
              <span>
                <a href={paper.citations.source} rel="noreferrer">
                  {text.citations} · {paper.citations.count.toLocaleString('en-US')}
                </a>
                {' '}({text.asOf} <time dateTime={paper.citations.asOf}>{paper.citations.asOf}</time>)
              </span>
            )}
            {paper.impactFactor && (
              <a href={paper.impactFactor.source} rel="noreferrer">
                {text.impactFactor} ({paper.impactFactor.year}) · {paper.impactFactor.value}
              </a>
            )}
          </p>
        )}
        <div className="publication-links">
          {resources.map(([href, label]) => href && (
            <a key={label} href={href} aria-label={`${label} · ${paper.title}`} rel="noreferrer">
              {label}
            </a>
          ))}
        </div>
      </div>
    </li>
  )
}

export default function Publications() {
  const { language } = useLanguage()
  const [expanded, setExpanded] = useState(false)
  const text = labels[language]
  const papers = expanded ? publications : selected

  return (
    <section id="publications" className="publications" aria-labelledby="publications-heading">
      <div className="shell">
        <div className="publications-header">
          <div>
            <p className="kicker">{text.eyebrow}</p>
            <h2 id="publications-heading" className="display-heading">{expanded ? text.archive : text.selected}</h2>
          </div>
          <button
            type="button"
            className="publications-toggle"
            aria-controls="publications-list"
            aria-expanded={expanded}
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? text.showSelected : text.showAll}
            <span className="publications-toggle-mark" aria-hidden="true">{expanded ? '−' : '+'}</span>
          </button>
        </div>
        <ul className="publication-list" id="publications-list">
          {papers.map((paper) => <PublicationRow key={paper.id} paper={paper} text={text} />)}
        </ul>
      </div>
    </section>
  )
}

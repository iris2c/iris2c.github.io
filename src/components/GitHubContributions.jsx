import React, { useState, useEffect } from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import './GitHubContributions.css'

function GitHubContributions() {
  const { language } = useLanguage()
  const t = translations[language]
  const [repoStars, setRepoStars] = useState({})

  const repoDescriptions = {
    zh: {
      inspireMusic: "高保真长音乐生成",
      funASR: "基础端到端语音识别工具包",
      viewCode: "查看代码 →"
    },
    en: {
      inspireMusic: "InspireMusic: Integrating Super Resolution and Large Language Model for High-Fidelity Long-Form Music Generation",
      funASR: "FunASR - A Fundamental End-to-End Speech Recognition Toolkit",
      viewCode: "View Code →"
    }
  }

  const desc = repoDescriptions[language]

  // 仓库基础配置（不依赖语言）
  const repoConfigs = [
    {
      id: 1,
      name: "InspireMusic",
      language: "Python",
      url: "https://github.com/FunAudioLLM/FunMusic",
      apiPath: "FunAudioLLM/FunMusic"
    },
    {
      id: 2,
      name: "FunASR",
      language: "Python",
      url: "https://github.com/alibaba-damo-academy/FunASR",
      apiPath: "alibaba-damo-academy/FunASR"
    }
  ]

  // 根据语言生成完整的仓库列表
  const repositories = repoConfigs.map(repo => ({
    ...repo,
    description: repo.id === 1 ? desc.inspireMusic : desc.funASR
  }))

  // 获取GitHub仓库的star数量
  const fetchRepoStars = async (apiPath) => {
    try {
      const response = await fetch(`https://api.github.com/repos/${apiPath}`, {
        headers: {
          'Accept': 'application/vnd.github.v3+json'
        }
      })

      if (!response.ok) {
        throw new Error('Failed to fetch repo data')
      }

      const data = await response.json()
      return data.stargazers_count || 0
    } catch (error) {
      console.error(`Error fetching stars for ${apiPath}:`, error)
      return 0
    }
  }

  // 获取所有仓库的star数量
  useEffect(() => {
    const fetchAllStars = async () => {
      const starsData = {}

      // 使用repoConfigs而不是repositories，避免依赖变化
      for (const repo of repoConfigs) {
        const stars = await fetchRepoStars(repo.apiPath)
        starsData[repo.id] = stars
      }

      setRepoStars(starsData)
    }

    fetchAllStars()
  }, []) // 空依赖数组，只在组件挂载时执行一次

  return (
    <section id="github" className="section github-contributions">
      <div className="section-content">
        <h2 className="section-title">{t.github.title}</h2>
        <p className="section-subtitle">{t.github.subtitle}</p>
        <div className="repositories-list">
          {repositories.map((repo) => (
            <a
              key={repo.id}
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="repository-card"
            >
              <div className="repo-header">
                <h3 className="repo-name">{repo.name}</h3>
                <span className="repo-stars">
                  ⭐ {repoStars[repo.id] !== undefined ? repoStars[repo.id].toLocaleString() : '...'}
                </span>
              </div>
              <p className="repo-description">{repo.description}</p>
              <div className="repo-footer">
                <span className="repo-language">{repo.language}</span>
                <span className="repo-link">{desc.viewCode}</span>
              </div>
            </a>
          ))}
        </div>
        <div className="github-link">
          <a
            href={repoConfigs.find(repo => repo.id === 1)?.url || "https://github.com/FunAudioLLM/FunMusic"}
            target="_blank"
            rel="noopener noreferrer"
            className="link-button"
          >
            {t.github.visit}
          </a>
        </div>
      </div>
    </section>
  )
}

export default GitHubContributions


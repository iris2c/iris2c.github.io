import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import './LatestNews.css'

function LatestNews() {
  const { language } = useLanguage()
  const t = translations[language]

  const newsData = {
    zh: [
      {
        id: 1,
        date: "2025-12-23",
        title: "我们发布了新一代端到端语音交互模型 Fun-Audio-Chat！",
        description: "",
        link: "https://mp.weixin.qq.com/s/58ncSl-Mb0uG4Up08AuG1A"
      },
      {
        id: 2,
        date: "2025-02-11",
        title: "开源上新 | 通义音乐生成技术InspireMusic",
        description: "",
        link: "https://mp.weixin.qq.com/s/wzjvbsTBZyg2Gprh_EevRQ"
      },
      {
        id: 3,
        date: "2024-01",
        title: "开源音乐生成模型",
        description: "我们开源了音乐生成模型，包括 InspireMusic-Base, InspireMusic-Base-24kHz, InspireMusic-1.5B, InspireMusic-1.5B-24kHz, 和 InspireMusic-1.5B-Long，可在 ModelScope 和 HuggingFace 上获取。在线演示可在 HuggingFace Spaces 和 ModelScope Spaces 上体验。",
        link: "https://github.com/FunAudioLLM/FunMusic"
      },
      {
        id: 4,
        date: "2023-11",
        title: "开源 InspireMusic 代码仓库和演示",
        description: "我们很高兴地宣布开源 InspireMusic 代码仓库和音乐生成的演示。",
        link: "https://github.com/FunAudioLLM/FunMusic"
      },
      {
        id: 5,
        date: "2023-12-22",
        title: "ICASSP2024｜通义实验室语音团队入选论文速览",
        description: "",
        link: "https://mp.weixin.qq.com/s/LZp62ZQJIUVSDgNMle4lVw"
      },
      {
        id: 6,
        date: "2023-12-20",
        title: "EMNLP2023｜通义实验室语音团队入选论文解析",
        description: "",
        link: "https://mp.weixin.qq.com/s/IC9fuSb5SgKnTM-6CCHv_A"
      },
      {
        id: 7,
        date: "2023-06-13",
        title: "INTERSPEECH2023｜达摩院语音实验室入选论文全况速览",
        description: "",
        link: "https://mp.weixin.qq.com/s/WZqRhg3dk-gZEanct62eSA"
      },
      {
        id: 8,
        date: "2023-03-01",
        title: "ICASSP2023｜达摩院语音实验室入选论文全况速览",
        description: "",
        link: "https://mp.weixin.qq.com/s/OSpEFJEi8YoSDKpG12MDJg"
      }
    ],
    en: [
      {
        id: 1,
        date: "2025-12-23",
        title: "We released Fun-Audio-Chat, a new generation of end-to-end voice interaction model!",
        description: "",
        link: "https://mp.weixin.qq.com/s/58ncSl-Mb0uG4Up08AuG1A"
      },
      {
        id: 2,
        date: "2025-02-11",
        title: "Open Source Update | Tongyi Music Generation Model - InspireMusic",
        description: "",
        link: "https://github.com/FunAudioLLM/FunMusic"
      },
      {
        id: 3,
        date: "2024-01",
        title: "Open Source Music Generation Models",
        description: "We have open-sourced music generation models, including InspireMusic-Base, InspireMusic-Base-24kHz, InspireMusic-1.5B, InspireMusic-1.5B-24kHz, and InspireMusic-1.5B-Long, available on both ModelScope and HuggingFace. Online demos are available on HuggingFace Spaces and ModelScope Spaces.",
        link: "https://github.com/FunAudioLLM/FunMusic"
      },
      {
        id: 4,
        date: "2023-11",
        title: "Open Source InspireMusic Code Repository and Demos",
        description: "We are excited to announce the open-sourcing of the InspireMusic code repository and demos for music generation.",
        link: "https://github.com/alibaba/InspireMusic"
      },
      {
        id: 5,
        date: "2023-12-22",
        title: "ICASSP2024 | Tongyi Lab Speech Team Accepted Papers Overview",
        description: "",
        link: "https://mp.weixin.qq.com/s/LZp62ZQJIUVSDgNMle4lVw"
      },
      {
        id: 6,
        date: "2023-12-20",
        title: "EMNLP2023 | Tongyi Lab Speech Team Accepted Papers Analysis",
        description: "",
        link: "https://mp.weixin.qq.com/s/IC9fuSb5SgKnTM-6CCHv_A"
      },
      {
        id: 7,
        date: "2023-06-13",
        title: "INTERSPEECH2023 | DAMO Academy Speech Lab Accepted Papers Overview",
        description: "",
        link: "https://mp.weixin.qq.com/s/WZqRhg3dk-gZEanct62eSA"
      },
      {
        id: 8,
        date: "2023-03-01",
        title: "ICASSP2023 | DAMO Academy Speech Lab Accepted Papers Overview",
        description: "",
        link: "https://mp.weixin.qq.com/s/OSpEFJEi8YoSDKpG12MDJg"
      }
    ]
  }

  const news = newsData[language]

  return (
    <section id="news" className="section latest-news">
      <div className="section-content">
        <h2 className="section-title">{t.news.title}</h2>
        <div className="news-list">
          {news.map((item) => (
            <div key={item.id} className="news-item">
              <div className="news-date">{item.date}</div>
              <div className="news-content">
                <h3 className="news-title">
                  {item.link && item.link !== "#" ? (
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                      {item.title}
                    </a>
                  ) : (
                    item.title
                  )}
                </h3>
                {item.description && <p className="news-description">{item.description}</p>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestNews


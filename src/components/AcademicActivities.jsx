import React from 'react'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import './AcademicActivities.css'

function AcademicActivities() {
  const { language } = useLanguage()
  const t = translations[language]

  const activitiesData = {
    zh: [
      {
        id: 1,
        type: "学术会员",
        title: "IEEE Senior Member",
        role: "高级会员",
        location: "The Institute of Electrical and Electronics Engineers",
      },
      {
        id: 2,
        type: "期刊审稿",
        title: "顶级期刊审稿服务",
        role: "审稿人",
        location: "TNNLS, TASLP, TPAMI, TKDE, TETCI, TCYB, SPL, Neurocomputing, MSSP 等",
      },
      {
        id: 3,
        type: "会议审稿",
        title: "国际会议审稿服务",
        role: "审稿人",
        location: "ICASSP (2022-2025), Interspeech (2021, 2022, 2025), EMNLP (2023), CEC (2016-2021, 2023), IJCNN (2016, 2022) 等",
      }
    ],
    en: [
      {
        id: 1,
        type: "Professional Services",
        title: "IEEE Senior Member",
        role: "Senior Member",
        location: "The Institute of Electrical and Electronics Engineers",
      },
      {
        id: 2,
        type: "Journal Reviewing",
        title: "Top-tier Journal Reviewing",
        role: "Reviewer",
        location: "TNNLS, TASLP, TPAMI, TKDE, TETCI, TCYB, SPL, Neurocomputing, MSSP, etc.",
      },
      {
        id: 3,
        type: "Conference Reviewing",
        title: "International Conference Reviewing",
        role: "Reviewer",
        location: "ICASSP (2022-2025), Interspeech (2021, 2022, 2025), EMNLP (2023), CEC (2016-2021, 2023), IJCNN (2016, 2022), etc.",
      }
    ]
  }

  const activities = activitiesData[language]

  return (
    <section id="activities" className="section academic-activities">
      <div className="section-content">
        <h2 className="section-title">{t.activities.title}</h2>
        <div className="activities-grid">
          {activities.map((activity) => (
            <div key={activity.id} className="activity-card">
              <div className="activity-type">{activity.type}</div>
              <h3 className="activity-title">{activity.title}</h3>
              <p className="activity-role">{activity.role}</p>
              <div className="activity-meta">
                <span className="activity-location">{activity.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AcademicActivities


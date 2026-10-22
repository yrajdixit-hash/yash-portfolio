import InteractiveHeading from '../InteractiveHeading/InteractiveHeading'
import './Education.css'

const educationList = [
  {
    id: 'bca',
    period: '2025 — 2028',
    degree: 'BACHELOR OF COMPUTER APPLICATIONS (BCA)',
    institution: 'PSIT COLLEGE OF HIGHER EDUCATION',
    location: 'KANPUR, UTTAR PRADESH',
    status: 'EXPECTED GRADUATION: 2028',
    summary:
      'Pursuing Bachelor of Computer Applications with rigorous academic coursework in fundamental computer science, software engineering practices, and database management.',
    coursework: [
      'Data Structures',
      'Algorithms',
      'Database Management Systems (DBMS)',
      'Operating Systems',
      'Computer Networks',
      'Object-Oriented Programming',
    ],
  },
  {
    id: 'schooling',
    period: '2025',
    degree: 'SENIOR SECONDARY (CLASS XII) — PCM WITH COMPUTER SCIENCE',
    institution: 'KENDRIYA VIDYALAYA ALIGANJ',
    location: 'LUCKNOW, UTTAR PRADESH',
    status: 'COMPLETED (2025)',
    summary:
      'Completed secondary education with specialization in Physics, Chemistry, Mathematics, and Computer Science, establishing strong analytical and algorithmic foundations.',
    coursework: [
      'Computer Science',
      'Mathematics',
      'Physics',
      'Chemistry',
    ],
  },
]

export default function Education() {
  return (
    <section id="education" className="education section-gap" aria-label="Education from resume">
      <div className="container">
        {/* Section Header */}
        <div className="sec-head reveal">
          <div className="sec-head__title">
            <span className="sec-head__num">[ 04 ]</span>
            <span className="sec-head__label">EDUCATION // ACADEMIC RECORD</span>
          </div>
          <span className="sec-head__meta">PSIT KANPUR // KV ALIGANJ</span>
        </div>

        <div className="education__intro reveal">
          <InteractiveHeading as="h2" className="display-lg education__heading">
            ACADEMIC BACKGROUND & FOUNDATIONS.
          </InteractiveHeading>
          <p className="education__lead">
            Formal collegiate and senior secondary education building analytical problem-solving and computer science fundamentals.
          </p>
        </div>

        <div className="education__list">
          {educationList.map((item, i) => (
            <div
              key={item.id}
              className="education-card reveal"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Corner Crosshairs */}
              <div className="crosshair crosshair--tl" aria-hidden="true">+</div>
              <div className="crosshair crosshair--tr" aria-hidden="true">+</div>
              <div className="crosshair crosshair--bl" aria-hidden="true">+</div>
              <div className="crosshair crosshair--br" aria-hidden="true">+</div>

              <div className="education-card__top">
                <div className="education-card__period-row">
                  <span className="education-card__period">{item.period}</span>
                  <span className="education-card__status label-sm">
                    <span className="education-card__status-dot" />
                    {item.status}
                  </span>
                </div>
                <span className="education-card__loc label-sm">{item.location}</span>
              </div>

              <div className="education-card__body">
                <h3 className="education-card__degree">{item.degree}</h3>
                <p className="education-card__inst">{item.institution}</p>
                <p className="education-card__summary">{item.summary}</p>

                <div className="education-card__modules">
                  <span className="label-sm education-card__modules-head">RELEVANT COURSEWORK & SUBJECTS</span>
                  <div className="education-card__tags">
                    {item.coursework.map((c) => (
                      <span key={c} className="education-card__tag">
                        <span className="education-card__tag-icon">■</span>
                        <span>{c}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

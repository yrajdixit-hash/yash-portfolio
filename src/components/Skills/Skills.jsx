import InteractiveHeading from '../InteractiveHeading/InteractiveHeading'
import './Skills.css'

const categories = [
  {
    num: '01',
    label: 'PROGRAMMING LANGUAGES',
    headline: 'LANGUAGES & SYNTAX',
    desc: 'Core procedural, object-oriented, and scripting languages with strong syntactical and logical foundations.',
    skills: ['C', 'C++', 'Python', 'JavaScript', 'HTML', 'CSS', 'SQL'],
  },
  {
    num: '02',
    label: 'FRAMEWORKS & LIBRARIES',
    headline: 'FRONTEND ARCHITECTURE',
    desc: 'Building responsive, scalable web applications and intuitive user interfaces with modern client frameworks.',
    skills: ['React.js', 'Responsive Web Design', 'Component State', 'Modern DOM & APIs'],
  },
  {
    num: '03',
    label: 'DATABASE & STORAGE',
    headline: 'RELATIONAL & CLOUD DATA',
    desc: 'Designing structured relational tables, writing SQL queries, and integrating reactive cloud real-time databases.',
    skills: ['MySQL', 'Firebase', 'Cloud Firestore', 'DBMS Principles'],
  },
  {
    num: '04',
    label: 'TOOLS & CORE SKILLS',
    headline: 'ENVIRONMENT & PROBLEM SOLVING',
    desc: 'Industry-standard version control, developer environments, algorithmic reasoning, and object-oriented design.',
    skills: ['Git & GitHub', 'VS Code', 'Linux', 'MS Office', 'Data Structures', 'Problem Solving', 'OOP Concepts'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="skills section-gap" aria-label="Technical skills from resume">
      <div className="container">
        {/* Section Header */}
        <div className="sec-head reveal">
          <div className="sec-head__title">
            <span className="sec-head__num">[ 02 ]</span>
            <span className="sec-head__label">TECHNICAL SKILLS // VERIFIED RESUME STACK</span>
          </div>
          <span className="sec-head__meta">CANONICAL SKILLS</span>
        </div>

        <div className="skills__intro reveal">
          {/* Interactive 3D Cursor-Reactive Heading */}
          <InteractiveHeading as="h2" className="display-lg skills__heading">
            TECHNICAL TOOLKIT & CORE ENGINEERING DISCIPLINES.
          </InteractiveHeading>
          <p className="skills__lead">
            Languages, frameworks, databases, and problem-solving skills directly aligned with academic coursework and hands-on projects.
          </p>
        </div>

        {/* Heron AI 4-Column Architectural Grid */}
        <div className="skills__grid">
          {categories.map(({ num, label, headline, desc, skills }, ci) => (
            <div
              key={num}
              className="skills__col reveal"
              style={{ transitionDelay: `${ci * 0.08}s` }}
            >
              <div className="skills__col-top">
                <span className="skills__col-num">{num}</span>
                <span className="label-sm skills__col-tag">{label}</span>
              </div>

              <h3 className="skills__col-headline">{headline}</h3>
              <p className="skills__col-desc">{desc}</p>

              <div className="skills__tags">
                {skills.map((skill) => (
                  <div key={skill} className="skills__tag">
                    <span className="skills__tag-mark">■</span>
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Heron AI Signature Monumental Banner with Crosshairs */}
        <div className="skills__banner reveal">
          <div className="crosshair crosshair--tl" aria-hidden="true">+</div>
          <div className="crosshair crosshair--tr" aria-hidden="true">+</div>
          <div className="crosshair crosshair--bl" aria-hidden="true">+</div>
          <div className="crosshair crosshair--br" aria-hidden="true">+</div>

          <div className="skills__banner-inner">
            <span className="label-sm skills__banner-meta">CORE COMPETENCY HIGHLIGHT</span>
            <InteractiveHeading as="h3" className="skills__banner-title display-lg">
              DATA STRUCTURES, PROBLEM SOLVING, DBMS, OOP & RESPONSIVE DESIGN.
            </InteractiveHeading>
          </div>
        </div>
      </div>
    </section>
  )
}

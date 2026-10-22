import { use3DTilt } from '../../hooks/use3DTilt'
import InteractiveHeading from '../InteractiveHeading/InteractiveHeading'
import InteractiveTerminal from '../InteractiveTerminal/InteractiveTerminal'
import './About.css'

const highlights = [
  { num: '01', key: 'EDUCATION', label: 'BCA (2025–2028)', detail: 'PSIT College of Higher Education, Kanpur (Expected 2028)' },
  { num: '02', key: 'OBJECTIVE', label: 'Internships & Entry Roles', detail: 'Gain practical experience & improve technical expertise' },
  { num: '03', key: 'PRIMARY STACK', label: 'React, C++, Firebase', detail: 'Modern web development, databases & data structures' },
  { num: '04', key: 'LOCATION', label: 'Kanpur, UP, India', detail: 'PSIT Campus, NH-19, Kanpur, Uttar Pradesh' },
]

export default function About() {
  const tiltCardRef = use3DTilt({ maxTilt: 5, scale: 1.012 })

  return (
    <section id="about" className="about section-gap" aria-label="About Yash Raj Dixit">
      <div className="container">
        {/* Section Header */}
        <div className="sec-head reveal">
          <div className="sec-head__title">
            <span className="sec-head__num">[ 01 ]</span>
            <span className="sec-head__label">ABOUT ME // PROFILE & CAREER OBJECTIVE</span>
          </div>
          <span className="sec-head__meta">KANPUR, UP, INDIA</span>
        </div>

        <div className="about__layout">
          {/* Left: Interactive Heading & 4-Box Matrix */}
          <div className="about__left">
            <InteractiveHeading as="h2" className="display-lg about__heading reveal">
              DEDICATED TO LEARNING, BUILDING, AND SYSTEM CRAFTSMANSHIP.
            </InteractiveHeading>

            {/* 4-Box Technical Matrix */}
            <div className="about__matrix reveal">
              {highlights.map(({ num, key, label, detail }) => (
                <div key={key} className="about__matrix-item">
                  <div className="about__matrix-top">
                    <span className="about__matrix-num">{num}</span>
                    <span className="label-sm">{key}</span>
                  </div>
                  <h3 className="about__matrix-title">{label}</h3>
                  <p className="about__matrix-detail">{detail}</p>
                </div>
              ))}
            </div>

            {/* Interactive Developer Terminal (Live Coding Experience) */}
            <div className="about__terminal-wrap reveal">
              <InteractiveTerminal />
            </div>
          </div>

          {/* Right: Architectural Narrative Card with 3D Tilt */}
          <div className="about__right">
            <div ref={tiltCardRef} className="about__card reveal">
              <div className="crosshair crosshair--tl" aria-hidden="true">+</div>
              <div className="crosshair crosshair--tr" aria-hidden="true">+</div>
              <div className="crosshair crosshair--bl" aria-hidden="true">+</div>
              <div className="crosshair crosshair--br" aria-hidden="true">+</div>

              <div className="about__card-badge label-sm">
                <span>RESUME SUMMARY // YASH RAJ DIXIT</span>
              </div>

              <p className="about__lead">
                I am a quick learner with excellent teamwork and communication skills,
                pursuing my Bachelor of Computer Applications (BCA) at <strong>PSIT College of Higher Education, Kanpur (2025–2028)</strong>.
              </p>

              <p className="about__body">
                I am actively seeking an internship or entry-level opportunity to gain practical experience,
                contribute meaningfully to organizational success, and continuously enhance my technical expertise.
              </p>

              <p className="about__body">
                My technical toolkit includes <strong>C, C++, Python, JavaScript, HTML, CSS, and SQL</strong>, paired with
                modern frameworks like <strong>React.js</strong> and databases like <strong>MySQL, Firebase, and Firestore</strong>.
                I focus on core fundamentals including <strong>Data Structures, Problem Solving, DBMS, Object-Oriented Programming, and Responsive Web Design</strong>.
              </p>

              <p className="about__body">
                I developed <strong>BloodLink</strong> (Mar. 2026 – Jun. 2026) as a real-time platform connecting blood donors
                with people in urgent need, implementing donor profiles, live matching, and secure Firebase authentication.
              </p>

              <div className="about__card-footer">
                <div className="about__signature label-sm">
                  YASH RAJ DIXIT // EXPECTED GRADUATION: 2028
                </div>
                <div className="about__pulse-tag label-sm">
                  <span className="about__pulse-dot" />
                  AVAILABLE FOR INTERNSHIPS
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

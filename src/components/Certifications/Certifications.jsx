import InteractiveHeading from '../InteractiveHeading/InteractiveHeading'
import './Certifications.css'

const certifications = [
  {
    code: 'CERT // 01',
    title: 'C Programming Basics',
    issuer: 'Simplilearn SkillUp',
    date: 'November 2025',
    category: 'PROGRAMMING FOUNDATIONS',
    desc: 'Foundational syntax, logic constructs, control flow, functions, memory allocations, and procedural problem-solving in C.',
  },
  {
    code: 'CERT // 02',
    title: 'Pointers in C Programming',
    issuer: 'Infosys Springboard',
    date: 'November 2025',
    category: 'MEMORY & DATA STRUCTURES',
    desc: 'Deep exploration of pointer arithmetic, direct memory addressing, dynamic allocation, pointer-to-pointer, and buffer management.',
  },
  {
    code: 'CERT // 03',
    title: 'AI Fluency: Framework & Foundations',
    issuer: 'Anthropic, Ringling College of Art + Design, National Forum',
    date: '2025',
    category: 'APPLIED AI & REASONING',
    desc: 'Comprehensive frameworks for evaluating generative AI models, prompt construction, ethical considerations, and AI-enabled workflows.',
  },
  {
    code: 'CERT // 04',
    title: 'Claude Code in Action',
    issuer: 'Anthropic',
    date: '2025',
    category: 'DEVELOPER TOOLING & AGENTS',
    desc: 'Hands-on practical development utilizing agentic coding tools, terminal workflows, refactoring, and programmatic code generation.',
  },
  {
    code: 'CERT // 05',
    title: 'Claude 101',
    issuer: 'Anthropic',
    date: 'May 2026',
    category: 'AI MODEL ARCHITECTURE',
    desc: 'Core architecture, context handling, multimodal understanding, function calling, and structured output integration.',
  },
  {
    code: 'CERT // 06',
    title: 'C++ Programming Course',
    issuer: 'Infosys Springboard',
    date: 'May 2026',
    category: 'OBJECT-ORIENTED PROGRAMMING',
    desc: 'Object-oriented programming in C++, classes, inheritance, polymorphism, templates, standard template library (STL), and exception handling.',
  },
]

export default function Certifications() {
  return (
    <section id="certifications" className="certifications section-gap" aria-label="Certifications from resume">
      <div className="container">
        {/* Section Header */}
        <div className="sec-head reveal">
          <div className="sec-head__title">
            <span className="sec-head__num">[ 05 ]</span>
            <span className="sec-head__label">CERTIFICATIONS // VERIFIED CREDENTIALS</span>
          </div>
          <span className="sec-head__meta">SIMPLILEARN // INFOSYS // ANTHROPIC</span>
        </div>

        <div className="certifications__intro reveal">
          <InteractiveHeading as="h2" className="display-lg certifications__heading">
            PROFESSIONAL CERTIFICATIONS & SKILL BADGES.
          </InteractiveHeading>
          <p className="certifications__lead">
            Continuous technical upskilling through accredited industry courses across procedural C, object-oriented C++, and modern AI fluency.
          </p>
        </div>

        {/* Heron AI 3-Column Architectural Matrix */}
        <div className="certifications__grid">
          {certifications.map((cert, i) => (
            <div
              key={cert.code}
              className="cert-card reveal"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="cert-card__top">
                <span className="cert-card__code">{cert.code}</span>
                <span className="label-sm cert-card__date">{cert.date}</span>
              </div>

              <div className="cert-card__body">
                <span className="label-sm cert-card__cat">{cert.category}</span>
                <h3 className="cert-card__title">{cert.title}</h3>
                <p className="cert-card__issuer">{cert.issuer}</p>
                <p className="cert-card__desc">{cert.desc}</p>
              </div>

              <div className="cert-card__footer">
                <span className="cert-card__tag label-sm">VERIFIED CREDENTIAL</span>
                <span className="cert-card__arrow">✓</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import './Exploring.css'

const areas = [
  {
    code: 'RADAR // 01',
    label: 'GENERATIVE AI AGENTS',
    domain: 'LLM ORCHESTRATION & TOOL CALLING',
    desc: 'Exploring prompt graphs, tool calling interfaces, structured JSON outputs, and embedding retrieval for task-oriented automation systems.',
  },
  {
    code: 'RADAR // 02',
    label: 'FRONTEND ARCHITECTURE',
    domain: 'REACT STATE & TOKENS',
    desc: 'Deepening patterns in component composition, concurrency primitives, memoization boundaries, and scalable design token systems.',
  },
  {
    code: 'RADAR // 03',
    label: 'HIGH-FIDELITY MOTION',
    domain: 'VELOCITY & INTERACTION',
    desc: 'Studying scroll physics, smooth momentum scrolling, kinetic typographic reveals, and 60fps buttery interaction design.',
  },
  {
    code: 'RADAR // 04',
    label: 'ALGORITHMIC PRACTICE',
    domain: 'COMPUTATIONAL COMPLEXITY',
    desc: 'Daily practice across graph traversals, dynamic programming, tree manipulations, and optimal memory management in C++ and Python.',
  },
  {
    code: 'RADAR // 05',
    label: 'CLOUD & EDGE DATA',
    domain: 'DISTRIBUTED ARCHITECTURE',
    desc: 'Investigating edge computing, real-time sync protocols, declarative authorization rules, and low-latency cache strategies.',
  },
  {
    code: 'RADAR // 06',
    label: 'OPEN SOURCE UTILITIES',
    domain: 'DEVELOPER EXPERIENCE',
    desc: 'Publishing lightweight development utilities, writing clear technical documentation, and engaging in open-source collaboration.',
  },
]

export default function Exploring() {
  return (
    <section id="exploring" className="exploring section-gap" aria-label="Research and ongoing exploration">
      <div className="container">
        {/* Section Header */}
        <div className="sec-head reveal">
          <div className="sec-head__title">
            <span className="sec-head__num">[ 05 ]</span>
            <span className="sec-head__label">RESEARCH RADAR // ACTIVE INQUIRIES</span>
          </div>
          <span className="sec-head__meta">LAB 2026</span>
        </div>

        <div className="exploring__intro reveal">
          <h2 className="display-lg exploring__heading">
            CURRENT RADAR & <br />
            <span className="exploring__heading-accent">INTELLECTUAL INQUIRIES.</span>
          </h2>
          <p className="exploring__lead">
            Domains where I am actively studying research papers, prototyping sandboxes, and pushing technical boundaries.
          </p>
        </div>

        {/* Heron AI 3-Column Architectural Matrix */}
        <div className="exploring__grid">
          {areas.map((area, i) => (
            <div
              key={area.code}
              className="exploring__card reveal"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="exploring__card-top">
                <span className="exploring__card-code">{area.code}</span>
                <span className="label-sm exploring__card-status">ACTIVE STUDY</span>
              </div>

              <div className="exploring__card-body">
                <span className="label-sm exploring__card-domain">{area.domain}</span>
                <h3 className="exploring__card-label">{area.label}</h3>
                <p className="exploring__card-desc">{area.desc}</p>
              </div>

              <div className="exploring__card-footer">
                <span className="exploring__card-tag label-sm">STATUS // IN PROGRESS</span>
                <span className="exploring__card-arrow">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

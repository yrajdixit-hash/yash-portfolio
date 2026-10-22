import { use3DTilt } from '../../hooks/use3DTilt'
import InteractiveHeading from '../InteractiveHeading/InteractiveHeading'
import MagneticButton from '../MagneticButton/MagneticButton'
import './Projects.css'

const projects = [
  {
    id: 'bloodlink',
    num: '01',
    category: 'FEATURED RESUME PROJECT // REAL-TIME WEB APPLICATION',
    name: 'BLOODLINK',
    period: 'MAR. 2026 – JUN. 2026',
    tagline: 'REAL-TIME BLOOD DONOR PLATFORM CONNECTING DONORS WITH PEOPLE IN NEED',
    description:
      'A real-time platform developed to connect blood donors with individuals in urgent need. Built with React.js, JavaScript, Firebase, and Firestore, BloodLink simplifies finding compatible donors through donor registration, blood request posting, and live donor matching.',
    tech: ['React.js', 'Firebase Authentication', 'Cloud Firestore', 'JavaScript (ES6+)', 'Responsive Web Design'],
    stats: [
      { key: 'TIMELINE', val: 'MAR 2026 – JUN 2026' },
      { key: 'DATABASE', val: 'FIRESTORE' },
      { key: 'STATUS', val: 'ACTIVE REPOSITORY' },
    ],
    features: [
      'Donor registration and donor profile management',
      'Blood request posting with blood group specifications',
      'Live donor matching features to quickly connect matching parties',
      'Firebase Authentication for secure data storage and real-time updates',
      'Responsive, accessible interface crafted for easy access on mobile devices',
    ],
    github: 'https://github.com/yrajdixit-hash/BlOODLINK',
    profile: 'https://github.com/yrajdixit-hash',
    status: 'COMPLETED & VERIFIED',
  },
  {
    id: 'coopgig',
    num: '02',
    category: 'FULL-STACK WEB APPLICATION // WORKER-OWNED PLATFORM COOPERATIVE',
    name: 'COOPGIG',
    period: '2026 // LIVE DEPLOYMENT',
    tagline: 'SERVICES, OWNED BY THE PEOPLE WHO DO THEM',
    description:
      'A platform cooperative connecting gig workers and clients directly. Built with React.js, Framer Motion, and responsive Tailwind styling, CoopGig empowers service providers with direct ownership, transparent earnings, dynamic price negotiation, and real-time booking threads.',
    tech: ['React.js', 'Framer Motion', 'TailwindCSS', 'JavaScript (ES6+)', 'Vercel'],
    stats: [
      { key: 'DEPLOYMENT', val: 'VERCEL LIVE' },
      { key: 'ARCHITECTURE', val: 'PLATFORM CO-OP' },
      { key: 'STATUS', val: 'PRODUCTION' },
    ],
    features: [
      'Worker-owned cooperative model empowering service providers with equity and voice',
      'Real-time service booking, schedule coordination & dynamic price negotiation threads',
      'Worker welfare pool, transparent fee breakdowns, and real-time earnings ledger',
      'Verified service provider profiles, ratings, reviews, dispute resolution & phone authentication',
      'Fluid motion micro-interactions with mobile-first responsive architecture deployed on Vercel',
    ],
    liveDemo: 'https://coopgig-one.vercel.app/',
    github: 'https://github.com/yrajdixit-hash',
    profile: 'https://github.com/yrajdixit-hash',
    status: 'LIVE ON VERCEL',
  },
]

function ProjectItem({ project, idx }) {
  const tiltRef = use3DTilt({ maxTilt: 4, scale: 1.01 })

  return (
    <article
      ref={tiltRef}
      className={`project-card reveal ${project.upcoming ? 'project-card--upcoming' : ''}`}
      style={{ transitionDelay: `${idx * 0.12}s` }}
      aria-label={`Project: ${project.name}`}
    >
      {/* Corner Crosshairs */}
      <div className="crosshair crosshair--tl" aria-hidden="true">+</div>
      <div className="crosshair crosshair--tr" aria-hidden="true">+</div>
      <div className="crosshair crosshair--bl" aria-hidden="true">+</div>
      <div className="crosshair crosshair--br" aria-hidden="true">+</div>

      {/* Blueprint CAD Schematic Canvas */}
      <div className="project-card__schematic">
        <div className="project-card__schematic-header">
          <span className="label-sm">PROJECT // {project.num} ({project.period})</span>
          <span className="project-card__schematic-status label-sm">
            <span className="project-card__schematic-dot" />
            {project.status}
          </span>
        </div>

        <div className="project-card__canvas">
          {project.id === 'bloodlink' ? (
            <svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" className="project-card__svg" aria-label="BloodLink Architectural Schematic">
              {/* Architectural Blueprint Grid */}
              <g stroke="#CBC7BC" strokeWidth="0.75" strokeDasharray="3 3">
                <line x1="20" y1="50" x2="440" y2="50" />
                <line x1="20" y1="150" x2="440" y2="150" />
                <line x1="20" y1="250" x2="440" y2="250" />
                <line x1="115" y1="20" x2="115" y2="280" />
                <line x1="230" y1="20" x2="230" y2="280" />
                <line x1="345" y1="20" x2="345" y2="280" />
              </g>

              {/* Concentric Architectural Rings */}
              <circle cx="230" cy="150" r="110" fill="none" stroke="#111111" strokeWidth="1" strokeDasharray="6 4" />
              <circle cx="230" cy="150" r="75" fill="none" stroke="#CBC7BC" strokeWidth="1" />
              <circle cx="230" cy="150" r="38" fill="#E8E6DF" stroke="#FF3B00" strokeWidth="2" />

              {/* Pulse Wave in Center */}
              <path d="M216 150 H222 L225 140 L229 160 L233 146 L236 150 H244" fill="none" stroke="#111111" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

              {/* Donor Nodes */}
              <g>
                <circle cx="115" cy="85" r="18" fill="#E8E6DF" stroke="#111111" strokeWidth="1.5" />
                <text x="115" y="89" fill="#FF3B00" fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="700" textAnchor="middle">O-</text>
                <line x1="130" y1="95" x2="205" y2="135" stroke="#111111" strokeWidth="1" strokeDasharray="3 3" />
              </g>

              <g>
                <circle cx="345" cy="85" r="18" fill="#E8E6DF" stroke="#111111" strokeWidth="1.5" />
                <text x="345" y="89" fill="#111111" fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="700" textAnchor="middle">A+</text>
                <line x1="330" y1="95" x2="255" y2="135" stroke="#111111" strokeWidth="1" strokeDasharray="3 3" />
              </g>

              <g>
                <circle cx="130" cy="225" r="18" fill="#E8E6DF" stroke="#111111" strokeWidth="1.5" />
                <text x="130" y="229" fill="#111111" fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="700" textAnchor="middle">B+</text>
                <line x1="145" y1="215" x2="210" y2="165" stroke="#111111" strokeWidth="1" strokeDasharray="3 3" />
              </g>

              <g>
                <circle cx="330" cy="225" r="18" fill="#E8E6DF" stroke="#111111" strokeWidth="1.5" />
                <text x="330" y="229" fill="#FF3B00" fontSize="10" fontFamily="JetBrains Mono, monospace" fontWeight="700" textAnchor="middle">AB+</text>
                <line x1="315" y1="215" x2="250" y2="165" stroke="#111111" strokeWidth="1" strokeDasharray="3 3" />
              </g>

              {/* Dimension lines */}
              <text x="24" y="32" fill="#7A776E" fontSize="8" fontFamily="JetBrains Mono, monospace">SCALE // 1:100 ACTIVE</text>
              <text x="436" y="32" fill="#FF3B00" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="end">FIRESTORE SYNCED</text>
            </svg>
          ) : (
            <svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" className="project-card__svg" aria-label="CoopGig Architectural Platform Schematic">
              {/* Architectural Blueprint Grid */}
              <g stroke="#CBC7BC" strokeWidth="0.75" strokeDasharray="3 3">
                <line x1="20" y1="50" x2="440" y2="50" />
                <line x1="20" y1="150" x2="440" y2="150" />
                <line x1="20" y1="250" x2="440" y2="250" />
                <line x1="115" y1="20" x2="115" y2="280" />
                <line x1="230" y1="20" x2="230" y2="280" />
                <line x1="345" y1="20" x2="345" y2="280" />
              </g>

              {/* Cooperative Hexagonal Network Topology */}
              <polygon points="230,55 340,115 340,230 230,285 120,230 120,115" fill="none" stroke="#111111" strokeWidth="1" strokeDasharray="5 3" />
              <circle cx="230" cy="150" r="88" fill="none" stroke="#CBC7BC" strokeWidth="1" />

              {/* Central Cooperative Escrow Hub */}
              <circle cx="230" cy="150" r="42" fill="#E8E6DF" stroke="#FF3B00" strokeWidth="2" />
              <text x="230" y="145" fill="#111111" fontSize="9" fontFamily="JetBrains Mono, monospace" fontWeight="700" textAnchor="middle">COOPGIG</text>
              <text x="230" y="158" fill="#FF3B00" fontSize="7.5" fontFamily="JetBrains Mono, monospace" fontWeight="600" textAnchor="middle">CO-OP CORE</text>

              {/* Node 1: Worker Owners */}
              <g>
                <circle cx="120" cy="105" r="22" fill="#E8E6DF" stroke="#111111" strokeWidth="1.5" />
                <text x="120" y="103" fill="#111111" fontSize="7.5" fontFamily="JetBrains Mono, monospace" fontWeight="700" textAnchor="middle">WORKERS</text>
                <text x="120" y="113" fill="#FF3B00" fontSize="6.5" fontFamily="JetBrains Mono, monospace" fontWeight="600" textAnchor="middle">OWNERS</text>
                <line x1="140" y1="117" x2="192" y2="137" stroke="#111111" strokeWidth="1.2" strokeDasharray="3 3" />
              </g>

              {/* Node 2: Clients */}
              <g>
                <circle cx="340" cy="105" r="22" fill="#E8E6DF" stroke="#111111" strokeWidth="1.5" />
                <text x="340" y="103" fill="#111111" fontSize="7.5" fontFamily="JetBrains Mono, monospace" fontWeight="700" textAnchor="middle">CLIENTS</text>
                <text x="340" y="113" fill="#7A776E" fontSize="6.5" fontFamily="JetBrains Mono, monospace" fontWeight="600" textAnchor="middle">BOOKING</text>
                <line x1="320" y1="117" x2="268" y2="137" stroke="#111111" strokeWidth="1.2" strokeDasharray="3 3" />
              </g>

              {/* Node 3: Welfare & Equity Pool */}
              <g>
                <circle cx="230" cy="245" r="20" fill="#E8E6DF" stroke="#111111" strokeWidth="1.5" />
                <text x="230" y="243" fill="#111111" fontSize="7" fontFamily="JetBrains Mono, monospace" fontWeight="700" textAnchor="middle">WELFARE</text>
                <text x="230" y="253" fill="#34D399" fontSize="6.5" fontFamily="JetBrains Mono, monospace" fontWeight="700" textAnchor="middle">POOL 100%</text>
                <line x1="230" y1="225" x2="230" y2="192" stroke="#111111" strokeWidth="1.2" strokeDasharray="3 3" />
              </g>

              {/* Live negotiation arrow loops */}
              <path d="M 142 100 Q 230 42 318 100" fill="none" stroke="#FF3B00" strokeWidth="1" strokeDasharray="4 2" />
              <text x="230" y="52" fill="#FF3B00" fontSize="7.5" fontFamily="JetBrains Mono, monospace" textAnchor="middle">DYNAMIC PRICE NEGOTIATION</text>

              {/* Dimension lines */}
              <text x="24" y="32" fill="#7A776E" fontSize="8" fontFamily="JetBrains Mono, monospace">SCALE // 1:100 PRODUCTION</text>
              <text x="436" y="32" fill="#FF3B00" fontSize="8" fontFamily="JetBrains Mono, monospace" textAnchor="end">VERCEL DEPLOYED // LIVE</text>
            </svg>
          )}
        </div>

        {/* Technical Specs Footer */}
        <div className="project-card__stats">
          {project.stats.map(({ key, val }) => (
            <div key={key} className="project-card__stat">
              <span className="label-sm">{key}</span>
              <span className="project-card__stat-val">{val}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Information & Capabilities Side */}
      <div className="project-card__details">
        <div className="project-card__meta">
          <span className="project-card__num">{project.num}</span>
          <span className="label-sm project-card__category">{project.category}</span>
        </div>

        <h3 className="display-md project-card__title">{project.name}</h3>
        <p className="project-card__tagline">{project.tagline}</p>
        <p className="project-card__desc">{project.description}</p>

        {/* Features List */}
        <div className="project-card__features-wrap">
          <span className="label-sm project-card__features-head">IMPLEMENTED FEATURES</span>
          <ul className="project-card__features">
            {project.features.map((feat) => (
              <li key={feat} className="project-card__feature-item">
                <span className="project-card__feature-bullet">→</span>
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Pills */}
        <div className="project-card__tech">
          {project.tech.map((t) => (
            <span key={t} className="project-card__tech-tag">{t}</span>
          ))}
        </div>

        {/* Action Buttons with Magnetic Pull */}
        <div className="project-card__actions">
          {project.liveDemo && (
            <MagneticButton
              href={project.liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary project-card__btn"
            >
              <span className="btn__label">LIVE APPLICATION</span>
              <span className="btn__icon">↗</span>
            </MagneticButton>
          )}
          {project.github && (
            <MagneticButton
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`btn ${!project.liveDemo ? 'btn-primary' : ''} project-card__btn`}
            >
              <span className="btn__label">GITHUB REPOSITORY</span>
              <span className="btn__icon">↗</span>
            </MagneticButton>
          )}
          {project.profile && (
            <MagneticButton
              href={project.profile}
              target="_blank"
              rel="noopener noreferrer"
              className="btn project-card__btn"
            >
              <span className="btn__label">GITHUB PROFILE</span>
              <span className="btn__icon">↗</span>
            </MagneticButton>
          )}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="projects section-gap" aria-label="Featured projects from resume">
      <div className="container">
        {/* Section Header */}
        <div className="sec-head reveal">
          <div className="sec-head__title">
            <span className="sec-head__num">[ 03 ]</span>
            <span className="sec-head__label">PROJECTS // VERIFIED RESUME & PRODUCTION WORK</span>
          </div>
          <span className="sec-head__meta">BLOODLINK // COOPGIG</span>
        </div>

        <div className="projects__intro reveal">
          <InteractiveHeading as="h2" className="display-lg projects__heading">
            FEATURED PROJECTS & SOFTWARE ARCHITECTURE.
          </InteractiveHeading>
          <p className="projects__lead">
            Production web platforms and real-world systems developed with React.js, Firebase, Framer Motion, and scalable full-stack architectures.
          </p>
        </div>

        <div className="projects__list">
          {projects.map((project, idx) => (
            <ProjectItem key={project.id} project={project} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}

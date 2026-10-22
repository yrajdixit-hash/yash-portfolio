import { useRef, useEffect, useState } from 'react'
import Architectural3DViewer from '../ThreeCanvas/Architectural3DViewer'
import InteractiveHeading from '../InteractiveHeading/InteractiveHeading'
import MagneticButton from '../MagneticButton/MagneticButton'
import './Hero.css'

const toolkitItems = [
  { label: 'C', type: 'code' },
  { label: 'C++', type: 'code' },
  { label: 'PYTHON', type: 'code' },
  { label: 'JAVASCRIPT', type: 'code' },
  { label: 'REACT.JS', type: 'code' },
  { label: 'HTML5 & CSS3', type: 'code' },
  { label: 'SQL & MYSQL', type: 'code' },
  { label: 'FIREBASE & FIRESTORE', type: 'code' },
  { label: 'GIT & GITHUB', type: 'code' },
  { label: 'VS CODE & LINUX', type: 'code' },
  { label: 'profile.ts', type: 'file' },
  { label: 'bloodlink.spec.ts', type: 'file' },
  { label: 'coopgig.spec.ts', type: 'file' },
  { label: 'skills.json', type: 'file' },
  { label: 'certifications.sh', type: 'file' },
]

function VelocityScrollStrip() {
  const trackRef = useRef(null)
  const offsetRef = useRef(0)
  const velocityRef = useRef(0)
  const lastScrollY = useRef(0)
  const [liveVelocity, setLiveVelocity] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    lastScrollY.current = window.scrollY

    const onScroll = () => {
      const currentScrollY = window.scrollY
      const delta = currentScrollY - lastScrollY.current
      lastScrollY.current = currentScrollY
      // Inject scroll momentum into ticker velocity
      velocityRef.current += delta * 0.45
      // Clamp maximum velocity
      velocityRef.current = Math.max(-50, Math.min(50, velocityRef.current))
    }

    window.addEventListener('scroll', onScroll, { passive: true })

    let animId
    const baseSpeed = 1.15
    let frameCount = 0

    const updateTicker = () => {
      animId = requestAnimationFrame(updateTicker)
      frameCount++

      // Smooth friction deceleration
      velocityRef.current *= 0.93

      const currentSpeed = isHovered
        ? 0.35 + velocityRef.current * 0.2
        : baseSpeed + velocityRef.current

      offsetRef.current += currentSpeed

      if (trackRef.current) {
        const halfWidth = trackRef.current.scrollWidth / 2
        if (halfWidth > 0) {
          if (offsetRef.current >= halfWidth) {
            offsetRef.current -= halfWidth
          } else if (offsetRef.current < 0) {
            offsetRef.current += halfWidth
          }
        }
        // Dynamic kinetic skew based on scroll velocity
        const skew = Math.max(-12, Math.min(12, -velocityRef.current * 0.35))
        trackRef.current.style.transform = `translate3d(-${offsetRef.current}px, 0, 0) skewX(${skew}deg)`
      }

      if (frameCount % 8 === 0) {
        setLiveVelocity(Math.round(velocityRef.current * 10) / 10)
      }
    }

    animId = requestAnimationFrame(updateTicker)

    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(animId)
    }
  }, [isHovered])

  // Triplicate array for flawless infinite loop
  const displayItems = [...toolkitItems, ...toolkitItems, ...toolkitItems]

  return (
    <div
      className="hero__strip reveal"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label="Core Toolkit Velocity Scroll Strip"
    >
      <div className="hero__strip-head">
        <span className="label-sm">CORE TOOLKIT</span>
      </div>

      <div className="hero__strip-track-wrapper">
        <div ref={trackRef} className="hero__strip-track">
          {displayItems.map((item, idx) => (
            <div
              key={`${item.label}-${idx}`}
              className={`hero__strip-item ${item.type === 'file' ? 'hero__strip-item--file' : ''}`}
            >
              {item.type === 'file' ? (
                <span className="hero__strip-dot" aria-hidden="true" />
              ) : (
                <span className="hero__strip-mark" aria-hidden="true">■</span>
              )}
              <span>{item.label}</span>
              <span className="hero__strip-sep" aria-hidden="true">/</span>
            </div>
          ))}
        </div>
      </div>

      <div className="hero__strip-note label-sm">
        <span className="hero__strip-pulse" aria-hidden="true" />
        <span>VELOCITY // {liveVelocity !== 0 ? `${liveVelocity > 0 ? '+' : ''}${liveVelocity}px` : 'SYNCED'}</span>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="hero" className="hero" aria-label="Introduction">
      {/* Corner Crosshairs */}
      <div className="crosshair crosshair--tl" aria-hidden="true">+</div>
      <div className="crosshair crosshair--tr" aria-hidden="true">+</div>
      <div className="crosshair crosshair--bl" aria-hidden="true">+</div>
      <div className="crosshair crosshair--br" aria-hidden="true">+</div>

      {/* Red Laser Horizon Guide */}
      <div className="hero__horizon" aria-hidden="true">
        <span className="hero__horizon-tag">50% // LEVEL 01</span>
        <div className="hero__horizon-line" />
      </div>

      <div className="container hero__inner">
        <div className="hero__layout">
          {/* Left Column: Interactive Magnetic Heading & CTAs */}
          <div className="hero__content">
            <div className="hero__top-meta reveal">
              <span className="hero__status-dot" aria-hidden="true" />
              <span className="label-sm">BCA STUDENT • ASPIRING SOFTWARE DEVELOPER</span>
            </div>

            {/* Interactive 3D Cursor-Reactive Heading */}
            <InteractiveHeading as="h1" className="display-hero hero__title">
              BUILDING DIGITAL EXPERIENCES WHERE CODE MEETS CRAFT.
            </InteractiveHeading>

            <p className="hero__desc reveal">
              I am <strong>Yash Raj Dixit</strong>, a BCA student at <strong>PSIT College of Higher Education, Kanpur</strong> (2025–2028).
              Seeking internship and entry-level opportunities to gain practical experience, contribute to organizational success,
              and build dependable, user-focused software applications.
            </p>

            {/* Magnetic Interactive Buttons */}
            <div className="hero__ctas reveal">
              <MagneticButton href="#projects" className="btn btn-primary hero__btn">
                <span className="btn__label">EXPLORE PROJECTS</span>
                <span className="btn__icon">→</span>
              </MagneticButton>
              <MagneticButton href="#contact" className="btn hero__btn">
                <span className="btn__label">GET IN TOUCH</span>
                <span className="btn__icon">→</span>
              </MagneticButton>
            </div>
          </div>

          {/* Right Column: 360° 3D Architectural Model & Metadata Dossier */}
          <div className="hero__visual reveal">
            <Architectural3DViewer />

            <div className="hero__dossier">
              <div className="hero__dossier-head">
                <span className="label-sm">WELCOME TO YASH RAJ DIXIT PORTFOLIO</span>
              </div>
              <div className="hero__dossier-table">
                <div className="hero__dossier-row">
                  <span className="hero__dossier-key">TYPE</span>
                  <span className="hero__dossier-val">: BCA STUDENT • ASPIRING SOFTWARE DEVELOPER</span>
                </div>
                <div className="hero__dossier-row">
                  <span className="hero__dossier-key">EDUCATION</span>
                  <span className="hero__dossier-val">: BCA @ PSIT College of Higher Education, Kanpur (2025–2028)</span>
                </div>
                <div className="hero__dossier-row">
                  <span className="hero__dossier-key">GRADUATION</span>
                  <span className="hero__dossier-val">: EXPECTED 2028</span>
                </div>
                <div className="hero__dossier-row">
                  <span className="hero__dossier-key">LOCATION</span>
                  <span className="hero__dossier-val">: Kanpur, Uttar Pradesh, India</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Heron AI Architectural Tech Strip with Velocity Scroll */}
        <VelocityScrollStrip />
      </div>
    </section>
  )
}

import { useState, useEffect } from 'react'
import MagneticButton from '../MagneticButton/MagneticButton'
import './Navbar.css'

const links = [
  { href: '#about',          num: '01', label: 'ABOUT' },
  { href: '#skills',         num: '02', label: 'SKILLS' },
  { href: '#projects',       num: '03', label: 'PROJECTS' },
  { href: '#education',      num: '04', label: 'EDUCATION' },
  { href: '#certifications', num: '05', label: 'CERTIFICATIONS' },
  { href: '#contact',        num: '06', label: 'CONTACT' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]')
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-35% 0px -55% 0px' }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
      <div className="navbar__inner container">
        {/* Wordmark with architectural metadata */}
        <a href="#hero" className="navbar__wordmark" aria-label="Yash Raj Dixit — home">
          <span className="navbar__wordmark-title">YASH RAJ DIXIT</span>
          <span className="navbar__wordmark-meta label-sm">BCA // PSIT KANPUR (2025–2028)</span>
        </a>

        {/* Desktop nav */}
        <nav className="navbar__links" aria-label="Primary navigation">
          {links.map(({ href, num, label }) => (
            <a
              key={href}
              href={href}
              className={`navbar__link${activeSection === href.slice(1) ? ' navbar__link--active' : ''}`}
            >
              <span className="navbar__link-num">{num}</span>
              <span className="navbar__link-text">{label}</span>
            </a>
          ))}
        </nav>

        {/* Magnetic Heron AI Split-Box Button */}
        <MagneticButton href="mailto:Yrajdixit@gmail.com" className="btn btn-primary navbar__cta">
          <span className="btn__label">LET'S TALK</span>
          <span className="btn__icon">→</span>
        </MagneticButton>

        {/* Hamburger */}
        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
        >
          <span /><span /><span />
        </button>
      </div>

      {/* Full-width architectural border */}
      <div className="navbar__border-line" aria-hidden="true" />

      {/* Mobile menu */}
      <div className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`} aria-hidden={!menuOpen}>
        <nav className="navbar__mobile-links" aria-label="Mobile navigation">
          {links.map(({ href, num, label }) => (
            <a key={href} href={href} className="navbar__mobile-link" onClick={closeMenu}>
              <span className="navbar__mobile-num">{num}</span>
              <span>{label}</span>
            </a>
          ))}
          <a href="mailto:Yrajdixit@gmail.com" className="btn btn-primary navbar__mobile-cta" onClick={closeMenu}>
            <span className="btn__label">INITIATE CONTACT</span>
            <span className="btn__icon">→</span>
          </a>
        </nav>
      </div>
    </header>
  )
}

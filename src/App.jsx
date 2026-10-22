import { useEffect, useRef, useState } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Navbar         from './components/Navbar/Navbar'
import Hero           from './components/Hero/Hero'
import About          from './components/About/About'
import Skills         from './components/Skills/Skills'
import Projects       from './components/Projects/Projects'
import Education      from './components/Education/Education'
import Certifications from './components/Certifications/Certifications'
import Contact        from './components/Contact/Contact'
import Footer         from './components/Footer/Footer'
import Cursor3D       from './components/Cursor3D/Cursor3D'
import ParallaxCodingBackground from './components/ParallaxCodingBackground/ParallaxCodingBackground'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const lenisRef = useRef(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Lenis & GSAP ScrollTrigger Velocity Integration
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    })
    lenisRef.current = lenis

    lenis.on('scroll', (e) => {
      ScrollTrigger.update()
      const total = document.documentElement.scrollHeight - window.innerHeight
      if (total > 0) {
        setScrollProgress((e.scroll / total) * 100)
      }

      // Feed velocity into document for dynamic CSS velocity effects
      const velocity = Math.min(Math.max(e.velocity, -15), 15)
      document.documentElement.style.setProperty('--scroll-velocity', `${velocity}px`)
    })

    const updateTicker = (time) => {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(updateTicker)
    gsap.ticker.lagSmoothing(0)

    return () => {
      gsap.ticker.remove(updateTicker)
      lenis.destroy()
    }
  }, [])

  // Viewport ScrollTrigger animations on cards and sections
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    const els = document.querySelectorAll('.reveal, .heading-mask')
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">
      {/* 3D Interactive Crosshair Cursor with Live Coordinates */}
      <Cursor3D />

      {/* GSAP ScrollTrigger Layered Parallax Background Coding Glyphs */}
      <ParallaxCodingBackground />

      {/* Top red progress laser */}
      <div
        className="app__progress-bar"
        style={{ width: `${scrollProgress}%` }}
        aria-hidden="true"
      />

      {/* Heron AI signature side badge */}
      <div className="floating-badge" aria-label="Status: Available for work">
        <div className="floating-badge__icon">Y.</div>
        <div className="floating-badge__text">BCA // EXPECTED 2028</div>
      </div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

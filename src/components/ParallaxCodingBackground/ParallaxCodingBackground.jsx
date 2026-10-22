import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './ParallaxCodingBackground.css'

gsap.registerPlugin(ScrollTrigger)

const codeGlyphs = [
  { text: '{ state }', top: '15%', left: '4%', speed: -0.4 },
  { text: '01001101', top: '28%', right: '5%', speed: 0.6 },
  { text: '<Component />', top: '42%', left: '3%', speed: -0.5 },
  { text: 'async () =>', top: '56%', right: '4%', speed: 0.7 },
  { text: 'const [data]', top: '70%', left: '5%', speed: -0.3 },
  { text: 'git push origin main', top: '85%', right: '6%', speed: 0.5 },
]

export default function ParallaxCodingBackground() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const el = containerRef.current
    if (!el) return

    const items = el.querySelectorAll('.parallax-glyph')

    items.forEach((item) => {
      const speed = parseFloat(item.dataset.speed || '0.3')
      gsap.to(item, {
        y: () => speed * 260,
        rotation: () => speed * 15,
        ease: 'none',
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.2,
        },
      })
    })

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className="parallax-bg" aria-hidden="true">
      {codeGlyphs.map((glyph, idx) => (
        <span
          key={idx}
          className="parallax-glyph"
          data-speed={glyph.speed}
          style={{
            top: glyph.top,
            left: glyph.left,
            right: glyph.right,
          }}
        >
          {glyph.text}
        </span>
      ))}
    </div>
  )
}

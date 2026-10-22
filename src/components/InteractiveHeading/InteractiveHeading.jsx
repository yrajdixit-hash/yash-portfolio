import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import './InteractiveHeading.css'

export default function InteractiveHeading({
  children,
  className = '',
  as: Component = 'h2',
  magneticStrength = 22,
  tiltStrength = 15,
  ...props
}) {
  const headingRef = useRef(null)

  useEffect(() => {
    const el = headingRef.current
    if (!el) return

    // Skip heavy animations if user prefers reduced motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const chars = el.querySelectorAll('.ih-char')
    if (!chars.length) return

    let rect
    const updateRect = () => {
      rect = el.getBoundingClientRect()
    }
    updateRect()

    const onMouseMove = (e) => {
      if (!rect) updateRect()
      const mouseX = e.clientX
      const mouseY = e.clientY

      // Check proximity (expand bounds by 60px so heading reacts before cursor is directly on top)
      const proximity = 80
      if (
        mouseX < rect.left - proximity ||
        mouseX > rect.right + proximity ||
        mouseY < rect.top - proximity ||
        mouseY > rect.bottom + proximity
      ) {
        return
      }

      chars.forEach((char) => {
        const cRect = char.getBoundingClientRect()
        const cCenterX = cRect.left + cRect.width / 2
        const cCenterY = cRect.top + cRect.height / 2

        const distX = mouseX - cCenterX
        const distY = mouseY - cCenterY
        const distance = Math.hypot(distX, distY)

        const maxDist = 140
        if (distance < maxDist) {
          const force = (1 - distance / maxDist)
          const moveX = (distX / distance) * force * magneticStrength
          const moveY = (distY / distance) * force * magneticStrength
          const rotY = (distX / distance) * force * tiltStrength
          const rotX = -(distY / distance) * force * tiltStrength
          const moveZ = force * 18

          gsap.to(char, {
            x: moveX,
            y: moveY,
            z: moveZ,
            rotationX: rotX,
            rotationY: rotY,
            color: force > 0.6 ? 'var(--accent-vermilion)' : '',
            duration: 0.35,
            ease: 'power2.out',
            overwrite: 'auto',
          })
        } else {
          gsap.to(char, {
            x: 0,
            y: 0,
            z: 0,
            rotationX: 0,
            rotationY: 0,
            color: '',
            duration: 0.6,
            ease: 'elastic.out(1, 0.4)',
            overwrite: 'auto',
          })
        }
      })
    }

    const onMouseLeave = () => {
      gsap.to(chars, {
        x: 0,
        y: 0,
        z: 0,
        rotationX: 0,
        rotationY: 0,
        color: '',
        duration: 0.8,
        ease: 'elastic.out(1, 0.35)',
        stagger: 0.01,
        overwrite: 'auto',
      })
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('scroll', updateRect, { passive: true })
    window.addEventListener('resize', updateRect, { passive: true })
    el.addEventListener('mouseleave', onMouseLeave)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('scroll', updateRect)
      window.removeEventListener('resize', updateRect)
      el.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [magneticStrength, tiltStrength])

  // Helper to split text into span.ih-char while preserving HTML/accents
  const renderInteractiveText = (nodes) => {
    if (typeof nodes === 'string') {
      return nodes.split(' ').map((word, wIdx, arr) => (
        <span key={wIdx} className="ih-word">
          {word.split('').map((char, cIdx) => (
            <span key={cIdx} className="ih-char" aria-hidden="true">
              {char}
            </span>
          ))}
          {wIdx < arr.length - 1 && <span className="ih-space">&nbsp;</span>}
        </span>
      ))
    }

    if (Array.isArray(nodes)) {
      return nodes.map((node, i) => (
        <span key={i} className="ih-segment">
          {renderInteractiveText(node)}
        </span>
      ))
    }

    if (nodes && nodes.props && nodes.props.children) {
      return (
        <span {...nodes.props} className={`${nodes.props.className || ''} ih-sub`}>
          {renderInteractiveText(nodes.props.children)}
        </span>
      )
    }

    return nodes
  }

  return (
    <Component
      ref={headingRef}
      className={`interactive-heading ${className}`}
      {...props}
    >
      <span className="ih-sr-only">{children}</span>
      <span className="ih-canvas" aria-hidden="true">
        {renderInteractiveText(children)}
      </span>
    </Component>
  )
}

import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import './MagneticButton.css'

export default function MagneticButton({
  children,
  href,
  onClick,
  className = '',
  magneticDistance = 0.35,
  ...props
}) {
  const btnRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const btn = btnRef.current
    const content = contentRef.current
    if (!btn || !content) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let rect
    const updateRect = () => {
      rect = btn.getBoundingClientRect()
    }

    const onMouseEnter = () => {
      updateRect()
    }

    const onMouseMove = (e) => {
      if (!rect) updateRect()
      const x = e.clientX - (rect.left + rect.width / 2)
      const y = e.clientY - (rect.top + rect.height / 2)

      // Outer button magnetic pull
      gsap.to(btn, {
        x: x * magneticDistance,
        y: y * magneticDistance,
        duration: 0.3,
        ease: 'power2.out',
        overwrite: 'auto',
      })

      // Inner content layer (parallax depth)
      gsap.to(content, {
        x: x * (magneticDistance * 0.4),
        y: y * (magneticDistance * 0.4),
        duration: 0.3,
        ease: 'power2.out',
        overwrite: 'auto',
      })
    }

    const onMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: 'elastic.out(1.1, 0.35)',
        overwrite: 'auto',
      })
      gsap.to(content, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: 'elastic.out(1.1, 0.35)',
        overwrite: 'auto',
      })
    }

    btn.addEventListener('mouseenter', onMouseEnter)
    btn.addEventListener('mousemove', onMouseMove)
    btn.addEventListener('mouseleave', onMouseLeave)

    return () => {
      btn.removeEventListener('mouseenter', onMouseEnter)
      btn.removeEventListener('mousemove', onMouseMove)
      btn.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [magneticDistance])

  const Tag = href ? 'a' : 'button'

  return (
    <Tag
      ref={btnRef}
      href={href}
      onClick={onClick}
      className={`magnetic-btn ${className}`}
      {...props}
    >
      <span ref={contentRef} className="magnetic-btn__inner">
        {children}
      </span>
    </Tag>
  )
}

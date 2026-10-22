import { useEffect, useState } from 'react'
import './Cursor3D.css'

export default function Cursor3D() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hovered, setHovered] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Only enable custom cursor on non-touch desktop
    if (window.matchMedia('(pointer: coarse)').matches) return

    const onMouseMove = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
    }

    const onMouseLeave = () => setVisible(false)
    const onMouseEnter = () => setVisible(true)

    // Check if hovering interactive target
    const handleMouseOver = (e) => {
      const target = e.target.closest('a, button, .btn, .arch-3d, .project-card, .skills__col, .about__matrix-item')
      if (target) {
        setHovered(true)
      } else {
        setHovered(false)
      }
    }

    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('mouseenter', onMouseEnter)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('mouseenter', onMouseEnter)
    }
  }, [visible])

  if (!visible) return null

  return (
    <div
      className={`cursor-3d ${hovered ? 'cursor-3d--active' : ''}`}
      style={{
        transform: `translate3d(${pos.x}px, ${pos.y}px, 0)`,
      }}
      aria-hidden="true"
    >
      <div className="cursor-3d__ring" />
      <div className="cursor-3d__dot" />
      <span className="cursor-3d__coords">
        {Math.round(pos.x)},{Math.round(pos.y)}
      </span>
    </div>
  )
}

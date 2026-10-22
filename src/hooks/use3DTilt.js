import { useEffect, useRef } from 'react'

export function use3DTilt({ maxTilt = 8, scale = 1.015, speed = 400 } = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    let bounds
    const updateBounds = () => {
      bounds = el.getBoundingClientRect()
    }

    const onMouseEnter = () => {
      updateBounds()
      el.style.transition = `transform ${speed}ms cubic-bezier(0.16, 1, 0.3, 1)`
    }

    const onMouseMove = (e) => {
      if (!bounds) updateBounds()
      const mouseX = e.clientX - bounds.left
      const mouseY = e.clientY - bounds.top

      const centerX = bounds.width / 2
      const centerY = bounds.height / 2

      const percentX = (mouseX - centerX) / centerX
      const percentY = (mouseY - centerY) / centerY

      const tiltX = -percentY * maxTilt
      const tiltY = percentX * maxTilt

      el.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg) scale3d(${scale}, ${scale}, ${scale})`
    }

    const onMouseLeave = () => {
      el.style.transition = `transform 600ms cubic-bezier(0.16, 1, 0.3, 1)`
      el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`
    }

    el.addEventListener('mouseenter', onMouseEnter)
    el.addEventListener('mousemove', onMouseMove)
    el.addEventListener('mouseleave', onMouseLeave)

    return () => {
      el.removeEventListener('mouseenter', onMouseEnter)
      el.removeEventListener('mousemove', onMouseMove)
      el.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [maxTilt, scale, speed])

  return ref
}

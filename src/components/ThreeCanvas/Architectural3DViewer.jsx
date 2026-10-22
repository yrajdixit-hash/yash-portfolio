import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import './Architectural3DViewer.css'

export default function Architectural3DViewer() {
  const mountRef = useRef(null)
  const [azimuth, setAzimuth] = useState(0)
  const [isWireframe, setIsWireframe] = useState(false)
  const [autoRotate, setAutoRotate] = useState(true)
  const sceneRef = useRef(null)
  const materialsRef = useRef([])

  useEffect(() => {
    const container = mountRef.current
    if (!container) return

    const width = container.clientWidth
    const height = container.clientHeight

    // Scene & Camera
    const scene = new THREE.Scene()
    sceneRef.current = scene
    scene.background = new THREE.Color(0xE2DFD6) // Matches --bg-secondary

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.set(16, 12, 22)
    camera.lookAt(0, 3.5, 0)

    // Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    container.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.3)
    scene.add(ambientLight)

    const dirLight = new THREE.DirectionalLight(0xFFFAF0, 2.2)
    dirLight.position.set(20, 30, 15)
    dirLight.castShadow = true
    scene.add(dirLight)

    const fillLight = new THREE.DirectionalLight(0xE8E6DF, 0.9)
    fillLight.position.set(-15, -10, -15)
    scene.add(fillLight)

    // ── Model Group ──
    const group = new THREE.Group()
    scene.add(group)

    const materials = []
    materialsRef.current = materials

    // Ground Plane with Blueprint Grid
    const gridHelper = new THREE.GridHelper(28, 28, 0x111111, 0xCBC7BC)
    gridHelper.position.y = -0.01
    group.add(gridHelper)

    // Vermilion Red Sun Circle
    const sunGeo = new THREE.CircleGeometry(5.5, 48)
    const sunMat = new THREE.MeshBasicMaterial({
      color: 0xFF3B00,
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.95
    })
    const sunMesh = new THREE.Mesh(sunGeo, sunMat)
    sunMesh.position.set(-2, 8, -9)
    group.add(sunMesh)

    // Helper: Create architectural block with crisp 1px wireframe
    const createArchBlock = (w, h, d, x, y, z, color = 0xE8E6DF) => {
      const geo = new THREE.BoxGeometry(w, h, d)
      const mat = new THREE.MeshStandardMaterial({
        color,
        roughness: 0.35,
        metalness: 0.1,
        transparent: true,
        opacity: 0.88,
      })
      materials.push(mat)

      const mesh = new THREE.Mesh(geo, mat)
      mesh.position.set(x, y + h / 2, z)
      mesh.castShadow = true
      mesh.receiveShadow = true
      group.add(mesh)

      const edges = new THREE.EdgesGeometry(geo)
      const lineMat = new THREE.LineBasicMaterial({ color: 0x111111, linewidth: 1.5 })
      const line = new THREE.LineSegments(edges, lineMat)
      mesh.add(line)

      return mesh
    }

    // Towers & Pavilions
    createArchBlock(5, 12, 5, -2, 0, 0, 0xE8E6DF)
    createArchBlock(4.5, 8, 4.5, 3.5, 0, -1, 0xDDD9CF)
    createArchBlock(6, 3, 4, 1.5, 4, 3, 0xF2F0E8)

    // Structural Pillars
    const colGeo = new THREE.CylinderGeometry(0.18, 0.18, 4, 12)
    const colMat = new THREE.MeshStandardMaterial({ color: 0x111111 })
    for (let i = 0; i < 4; i++) {
      const col = new THREE.Mesh(colGeo, colMat)
      const px = -0.5 + (i % 2) * 4
      const pz = 1.5 + Math.floor(i / 2) * 3
      col.position.set(px, 2, pz)
      group.add(col)
    }



    // Orbiting Red Laser Ring
    const ringGeo = new THREE.TorusGeometry(9, 0.06, 16, 64)
    const ringMat = new THREE.MeshBasicMaterial({ color: 0xFF3B00 })
    const ringMesh = new THREE.Mesh(ringGeo, ringMat)
    ringMesh.rotation.x = Math.PI / 2
    ringMesh.position.y = 6
    group.add(ringMesh)

    // Floating Structural Vertex Particles
    const pGeo = new THREE.BufferGeometry()
    const pCoords = []
    for (let i = 0; i < 70; i++) {
      pCoords.push(
        (Math.random() - 0.5) * 22,
        Math.random() * 16,
        (Math.random() - 0.5) * 22
      )
    }
    pGeo.setAttribute('position', new THREE.Float32BufferAttribute(pCoords, 3))
    const pMat = new THREE.PointsMaterial({
      size: 0.2,
      color: 0x111111,
      transparent: true,
      opacity: 0.65
    })
    const particles = new THREE.Points(pGeo, pMat)
    group.add(particles)

    // ── 360 Degree Drag Controls & Velocity Reactivity ──
    let isDragging = false
    let prevMouseX = 0
    let prevMouseY = 0
    let rotationVelocityX = 0
    let rotationVelocityY = 0
    let targetRotationY = 0.6
    let targetRotationX = 0.2

    const onMouseDown = (e) => {
      isDragging = true
      prevMouseX = e.clientX || (e.touches && e.touches[0].clientX)
      prevMouseY = e.clientY || (e.touches && e.touches[0].clientY)
    }

    const onMouseMove = (e) => {
      if (!isDragging) return
      const currentX = e.clientX || (e.touches && e.touches[0].clientX)
      const currentY = e.clientY || (e.touches && e.touches[0].clientY)

      const deltaX = currentX - prevMouseX
      const deltaY = currentY - prevMouseY

      rotationVelocityY = deltaX * 0.006
      rotationVelocityX = deltaY * 0.004

      targetRotationY += rotationVelocityY
      targetRotationX += rotationVelocityX
      targetRotationX = Math.max(-0.4, Math.min(0.7, targetRotationX))

      prevMouseX = currentX
      prevMouseY = currentY
    }

    const onMouseUp = () => {
      isDragging = false
    }

    // Velocity on window scroll
    let lastScrollY = window.scrollY
    let scrollVelocity = 0
    const onWindowScroll = () => {
      const currentScrollY = window.scrollY
      scrollVelocity = (currentScrollY - lastScrollY) * 0.002
      lastScrollY = currentScrollY
    }

    const dom = renderer.domElement
    dom.addEventListener('mousedown', onMouseDown)
    dom.addEventListener('touchstart', onMouseDown, { passive: true })
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('touchmove', onMouseMove, { passive: true })
    window.addEventListener('mouseup', onMouseUp)
    window.addEventListener('touchend', onMouseUp)
    window.addEventListener('scroll', onWindowScroll, { passive: true })

    const onResize = () => {
      if (!container) return
      const w = container.clientWidth
      const h = container.clientHeight
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    // Animation Loop
    let reqId
    let time = 0
    const animate = () => {
      reqId = requestAnimationFrame(animate)
      time += 0.02

      if (!isDragging && autoRotate) {
        targetRotationY += 0.003 + Math.abs(scrollVelocity) * 0.1
      }

      // Smooth damping
      group.rotation.y += (targetRotationY - group.rotation.y) * 0.08
      group.rotation.x += (targetRotationX - group.rotation.x) * 0.08

      // Decay scroll velocity
      scrollVelocity *= 0.9



      ringMesh.rotation.z += 0.006
      particles.rotation.y -= 0.001

      const deg = Math.round(((group.rotation.y % (Math.PI * 2)) * 180) / Math.PI)
      const normalizedDeg = deg < 0 ? deg + 360 : deg
      setAzimuth(normalizedDeg)

      renderer.render(scene, camera)
    }
    animate()

    return () => {
      cancelAnimationFrame(reqId)
      window.removeEventListener('resize', onResize)
      window.removeEventListener('scroll', onWindowScroll)
      dom.removeEventListener('mousedown', onMouseDown)
      dom.removeEventListener('touchstart', onMouseDown)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('touchmove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      window.removeEventListener('touchend', onMouseUp)
      if (dom && dom.parentNode) dom.parentNode.removeChild(dom)
      renderer.dispose()
    }
  }, [autoRotate])

  const toggleWireframe = () => {
    setIsWireframe(!isWireframe)
    materialsRef.current.forEach((m) => {
      m.wireframe = !isWireframe
    })
  }

  return (
    <div className="arch-3d" aria-label="360 Degree 3D Architectural Model Viewer with Coding Elements">
      <div ref={mountRef} className="arch-3d__canvas" />

      <div className="arch-3d__hud-top">
        <div className="arch-3d__pill">
          <span className="arch-3d__pulse" />
          <span className="label-sm">360° WEBGL 3D STUDIO // CODING ELEMENTS</span>
        </div>
        <span className="label-sm arch-3d__telemetry">
          AZIMUTH: {azimuth}° // VELOCITY ACTIVE
        </span>
      </div>

      <div className="arch-3d__hint label-sm">
        <span>DRAG TO ORBIT 360° // FLOATING CODE BLOCKS & TOWER</span>
      </div>

      <div className="arch-3d__controls">
        <button
          className={`arch-3d__btn label-sm ${autoRotate ? 'arch-3d__btn--active' : ''}`}
          onClick={() => setAutoRotate(!autoRotate)}
          aria-label="Toggle auto rotation"
        >
          {autoRotate ? 'PAUSE ROTATION' : 'RESUME AUTO-SPIN'}
        </button>
        <button
          className={`arch-3d__btn label-sm ${isWireframe ? 'arch-3d__btn--active' : ''}`}
          onClick={toggleWireframe}
          aria-label="Toggle wireframe mode"
        >
          {isWireframe ? 'SHADED SOLID' : 'WIREFRAME'}
        </button>
      </div>
    </div>
  )
}

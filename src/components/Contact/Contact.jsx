import { useState } from 'react'
import InteractiveHeading from '../InteractiveHeading/InteractiveHeading'
import MagneticButton from '../MagneticButton/MagneticButton'
import './Contact.css'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('Yrajdixit@gmail.com').then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2400)
    })
  }

  return (
    <section id="contact" className="contact section-gap" aria-label="Contact and collaboration">
      <div className="container">
        {/* Section Header */}
        <div className="sec-head reveal">
          <div className="sec-head__title">
            <span className="sec-head__num">[ 06 ]</span>
            <span className="sec-head__label">INITIATE CONTACT // DIRECT CHANNELS</span>
          </div>
          <span className="sec-head__meta">STATUS // OPEN FOR INTERNSHIPS</span>
        </div>

        <div className="contact__wrapper reveal">
          {/* Corner Crosshairs */}
          <div className="crosshair crosshair--tl" aria-hidden="true">+</div>
          <div className="crosshair crosshair--tr" aria-hidden="true">+</div>
          <div className="crosshair crosshair--bl" aria-hidden="true">+</div>
          <div className="crosshair crosshair--br" aria-hidden="true">+</div>

          <div className="contact__layout">
            {/* Left: Headline & Action Triggers */}
            <div className="contact__left">
              <div className="contact__badge label-sm">
                <span className="contact__badge-dot" />
                AVAILABLE FOR INTERNSHIP & ENTRY-LEVEL ROLES
              </div>

              {/* 3D Cursor-Reactive Interactive Heading */}
              <InteractiveHeading as="h2" className="display-lg contact__heading">
                SEEKING INTERNSHIP OPPORTUNITIES. LET'S CONNECT.
              </InteractiveHeading>

              <p className="contact__desc">
                I am a BCA student at PSIT College of Higher Education, Kanpur (Expected 2028),
                seeking internship and entry-level opportunities to gain practical experience,
                contribute to team success, and enhance my technical expertise.
              </p>

              {/* Heron AI Split-Box Action Buttons with Magnetic Pull */}
              <div className="contact__ctas">
                <MagneticButton href="mailto:Yrajdixit@gmail.com" className="btn btn-primary contact__btn">
                  <span className="btn__label">SEND DIRECT EMAIL</span>
                  <span className="btn__icon">→</span>
                </MagneticButton>

                <MagneticButton
                  className="btn contact__btn contact__copy-btn"
                  onClick={copyEmail}
                  aria-label={copied ? 'Email copied' : 'Copy email address'}
                >
                  <span className="btn__label">
                    {copied ? '✓ COPIED TO CLIPBOARD' : 'Yrajdixit@gmail.com'}
                  </span>
                  <span className="btn__icon">⎘</span>
                </MagneticButton>
              </div>
            </div>

            {/* Right: Technical Dossier & Channels */}
            <div className="contact__right">
              <div className="contact__card">
                <span className="label-sm contact__card-head">VERIFIED CONTACT CHANNELS</span>

                <div className="contact__channels">
                  <a
                    href="mailto:Yrajdixit@gmail.com"
                    className="contact__channel"
                  >
                    <div className="contact__channel-info">
                      <span className="contact__channel-name">EMAIL</span>
                      <span className="label-sm contact__channel-meta">Yrajdixit@gmail.com</span>
                    </div>
                    <span className="contact__channel-arrow">↗</span>
                  </a>

                  <a
                    href="tel:+919260925059"
                    className="contact__channel"
                  >
                    <div className="contact__channel-info">
                      <span className="contact__channel-name">PHONE</span>
                      <span className="label-sm contact__channel-meta">+91-9260925059</span>
                    </div>
                    <span className="contact__channel-arrow">↗</span>
                  </a>

                  <a
                    href="https://github.com/yrajdixit-hash"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact__channel"
                  >
                    <div className="contact__channel-info">
                      <span className="contact__channel-name">GITHUB</span>
                      <span className="label-sm contact__channel-meta">github.com/yrajdixit-hash</span>
                    </div>
                    <span className="contact__channel-arrow">↗</span>
                  </a>
                </div>

                <div className="contact__telemetry">
                  <div className="contact__telemetry-item">
                    <span className="label-sm">INSTITUTION LOCATION</span>
                    <span className="contact__telemetry-val">PSIT College of Higher Education, NH-19, Kanpur, India</span>
                  </div>
                  <div className="contact__telemetry-item">
                    <span className="label-sm">DEGREE PROGRAM</span>
                    <span className="contact__telemetry-val">BCA (2025–2028) // Expected 2028</span>
                  </div>
                  <div className="contact__telemetry-item">
                    <span className="label-sm">WORK MODE</span>
                    <span className="contact__telemetry-val">Internship / Entry-Level / Remote / On-Site</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

import './Footer.css'

const year = new Date().getFullYear()

const navLinks = [
  { href: '#hero',           num: '00', label: 'INDEX' },
  { href: '#about',          num: '01', label: 'ABOUT' },
  { href: '#skills',         num: '02', label: 'SKILLS' },
  { href: '#projects',       num: '03', label: 'PROJECTS' },
  { href: '#education',      num: '04', label: 'EDUCATION' },
  { href: '#certifications', num: '05', label: 'CERTIFICATIONS' },
  { href: '#contact',        num: '06', label: 'CONTACT' },
]

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer" role="contentinfo">
      <div className="container footer__inner">
        {/* Top Editorial Row */}
        <div className="footer__top">
          {/* Brand Info */}
          <div className="footer__brand">
            <div className="footer__wordmark">
              <span>YASH RAJ DIXIT</span>
            </div>
            <p className="footer__tagline">
              BCA Student at PSIT College of Higher Education, Kanpur (2025–2028).
              Aspiring software developer seeking internship and entry-level opportunities to gain practical experience and solve real problems.
            </p>
            <div className="footer__geo">
              <span className="label-sm">LOCATION // PSIT CAMPUS, NH-19, KANPUR, UP, INDIA</span>
              <span className="label-sm">CONTACT // +91-9260925059 • Yrajdixit@gmail.com</span>
              <span className="label-sm">GRADUATION // EXPECTED 2028</span>
            </div>
          </div>

          {/* Directory Matrix */}
          <nav className="footer__nav" aria-label="Footer navigation">
            <span className="footer__col-head label-sm">DIRECTORY // 01</span>
            <div className="footer__nav-list">
              {navLinks.map(({ href, num, label }) => (
                <a key={href} href={href} className="footer__nav-link">
                  <span className="footer__nav-num">{num}</span>
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </nav>

          {/* Network Channels */}
          <div className="footer__social">
            <span className="footer__col-head label-sm">NETWORK // 02</span>
            <div className="footer__social-list">
              <a
                href="https://github.com/yrajdixit-hash"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                <span>GITHUB</span>
                <span className="footer__arrow">↗</span>
              </a>
              <a
                href="https://github.com/yrajdixit-hash/BlOODLINK"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                <span>BLOODLINK REPO</span>
                <span className="footer__arrow">↗</span>
              </a>
              <a
                href="https://coopgig-one.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
              >
                <span>COOPGIG (LIVE APP)</span>
                <span className="footer__arrow">↗</span>
              </a>
              <a
                href="mailto:Yrajdixit@gmail.com"
                className="footer__social-link"
              >
                <span>EMAIL DIRECT</span>
                <span className="footer__arrow">↗</span>
              </a>
              <a
                href="tel:+919260925059"
                className="footer__social-link"
              >
                <span>PHONE DIRECT</span>
                <span className="footer__arrow">↗</span>
              </a>
            </div>
          </div>
        </div>

        <div className="divider footer__divider" />

        {/* Bottom Colophon Bar */}
        <div className="footer__bottom">
          <div className="footer__copy">
            <span className="label-sm">
              © {year} YASH RAJ DIXIT // BCA @ PSIT KANPUR (2025–2028)
            </span>
          </div>

          <div className="footer__edition">
            <span className="label-sm footer__edition-text">
              <span className="footer__edition-dot" />
              VERIFIED PORTFOLIO // EXPECTED GRADUATION: 2028
            </span>
          </div>

          <button
            className="footer__top-btn"
            onClick={scrollTop}
            aria-label="Return to top of page"
          >
            <span className="label-sm">BACK TO TOP</span>
            <span className="footer__top-arrow">↑</span>
          </button>
        </div>
      </div>
    </footer>
  )
}

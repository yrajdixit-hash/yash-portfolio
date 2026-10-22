import { useState, useEffect } from 'react'
import './InteractiveTerminal.css'

const commands = [
  {
    id: 'profile',
    label: 'profile.ts',
    cmd: 'cat profile.ts',
    output: [
      { text: '// Resume Summary — Yash Raj Dixit', type: 'comment' },
      { text: 'interface CandidateProfile {', type: 'code' },
      { text: '  name: "Yash Raj Dixit";', type: 'code' },
      { text: '  title: "BCA Student • Aspiring Software Developer";', type: 'code' },
      { text: '  education: "BCA @ PSIT College of Higher Education, Kanpur (2025–2028)";', type: 'code' },
      { text: '  expectedGraduation: "2028";', type: 'code' },
      { text: '  location: "Kanpur, Uttar Pradesh, India";', type: 'code' },
      { text: '  objective: "Seeking internship or entry-level opportunities to gain practical experience";', type: 'code' },
      { text: '}', type: 'code' },
    ],
  },
  {
    id: 'bloodlink',
    label: 'bloodlink.spec.ts',
    cmd: 'npm test bloodlink.spec.ts',
    output: [
      { text: 'PASS src/__tests__/bloodlink.spec.ts [Mar. 2026 – Jun. 2026]', type: 'success' },
      { text: '  ✓ real-time donor registration and blood request posting', type: 'code' },
      { text: '  ✓ live donor matching platform connecting donors with patients', type: 'code' },
      { text: '  ✓ secure Firebase Authentication & Firestore real-time storage', type: 'code' },
      { text: '  ✓ responsive interface optimized for seamless mobile access', type: 'code' },
      { text: 'Tests: 4 passed, 4 total | Tech: React.js, Firebase, Firestore, JavaScript', type: 'success' },
    ],
  },
  {
    id: 'coopgig',
    label: 'coopgig.spec.ts',
    cmd: 'npm test coopgig.spec.ts',
    output: [
      { text: 'PASS src/__tests__/coopgig.spec.ts [Live: coopgig-one.vercel.app]', type: 'success' },
      { text: '  ✓ worker-owned platform cooperative service architecture', type: 'code' },
      { text: '  ✓ real-time price negotiation and booking threads', type: 'code' },
      { text: '  ✓ worker welfare pool and transparent earnings tracking', type: 'code' },
      { text: '  ✓ deployed to Vercel with responsive mobile-first UI', type: 'code' },
      { text: 'Tests: 4 passed, 4 total | Tech: React.js, Tailwind, Framer Motion, Vercel', type: 'success' },
    ],
  },
  {
    id: 'skills',
    label: 'skills.json',
    cmd: 'cat skills.json',
    output: [
      { text: '{', type: 'code' },
      { text: '  "programmingLanguages": ["C", "C++", "Python", "JavaScript", "HTML", "CSS", "SQL"],', type: 'code' },
      { text: '  "frameworksAndLibraries": ["React.js"],', type: 'code' },
      { text: '  "databases": ["MySQL", "Firebase", "Firestore"],', type: 'code' },
      { text: '  "toolsAndTech": ["Git", "GitHub", "VS Code", "Linux", "MS Office"],', type: 'code' },
      { text: '  "coreSkills": ["Data Structures", "Problem Solving", "DBMS", "OOP", "Responsive Web Design"]', type: 'code' },
      { text: '}', type: 'code' },
    ],
  },
  {
    id: 'certs',
    label: 'certifications.sh',
    cmd: 'bash list-certifications.sh',
    output: [
      { text: '• C Programming Basics — Simplilearn SkillUp (Nov 2025)', type: 'git' },
      { text: '• Pointers in C Programming — Infosys Springboard (Nov 2025)', type: 'git' },
      { text: '• AI Fluency: Framework & Foundations — Anthropic, Ringling, Nat. Forum (2025)', type: 'git' },
      { text: '• Claude Code in Action — Anthropic (2025)', type: 'git' },
      { text: '• Claude 101 — Anthropic (May 2026)', type: 'git' },
      { text: '• C++ Programming Course — Infosys Springboard (May 2026)', type: 'git' },
    ],
  },
]

export default function InteractiveTerminal() {
  const [activeTab, setActiveTab] = useState(0)
  const [displayedLines, setDisplayedLines] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const [typedCommand, setTypedCommand] = useState('')

  const current = commands[activeTab]

  useEffect(() => {
    setIsTyping(true)
    setTypedCommand('')
    setDisplayedLines([])

    let charIdx = 0
    const fullCmd = current.cmd

    const typeInterval = setInterval(() => {
      if (charIdx <= fullCmd.length) {
        setTypedCommand(fullCmd.slice(0, charIdx))
        charIdx++
      } else {
        clearInterval(typeInterval)
        setIsTyping(false)
        current.output.forEach((line, lIdx) => {
          setTimeout(() => {
            setDisplayedLines((prev) => [...prev, line])
          }, (lIdx + 1) * 70)
        })
      }
    }, 25)

    return () => clearInterval(typeInterval)
  }, [activeTab])

  return (
    <div className="dev-terminal" aria-label="Interactive Developer Terminal">
      {/* Terminal Titlebar with Unix Dots */}
      <div className="dev-terminal__titlebar">
        <div className="dev-terminal__dots">
          <span className="dev-terminal__dot dev-terminal__dot--red" />
          <span className="dev-terminal__dot dev-terminal__dot--yellow" />
          <span className="dev-terminal__dot dev-terminal__dot--green" />
        </div>

        <div className="dev-terminal__tabs">
          {commands.map((cmd, i) => (
            <button
              key={cmd.id}
              className={`dev-terminal__tab label-sm ${activeTab === i ? 'dev-terminal__tab--active' : ''}`}
              onClick={() => setActiveTab(i)}
            >
              {cmd.label}
            </button>
          ))}
        </div>

        <div className="dev-terminal__branch label-sm">
          <span>git:(main)</span>
        </div>
      </div>

      {/* Terminal Body */}
      <div className="dev-terminal__body">
        {/* Prompt line */}
        <div className="dev-terminal__prompt-line">
          <span className="dev-terminal__path">yash@psit-kanpur:~$</span>
          <span className="dev-terminal__cmd">{typedCommand}</span>
          <span className={`dev-terminal__cursor ${isTyping ? 'dev-terminal__cursor--solid' : ''}`} />
        </div>

        {/* Output lines */}
        <div className="dev-terminal__output">
          {displayedLines.map((line, idx) => (
            <div
              key={idx}
              className={`dev-terminal__line dev-terminal__line--${line.type}`}
            >
              {line.text}
            </div>
          ))}
        </div>
      </div>

      {/* Footer Info */}
      <div className="dev-terminal__footer">
        <span className="label-sm">BASH 5.2 // RESUME VERIFIED DATA</span>
        <span className="label-sm dev-terminal__hint">[ CLICK TABS TO SWITCH EXECUTION ]</span>
      </div>
    </div>
  )
}

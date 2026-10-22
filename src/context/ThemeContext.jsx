import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
  setTheme: () => {},
})

export function ThemeProvider({ children }) {
  const [theme, setThemeState] = useState(() => {
    // Check localStorage first
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved === 'dark' || saved === 'light') {
        return saved
      }
      // Check system preference
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark'
      }
    }
    return 'light'
  })

  // Apply theme to DOM
  useEffect(() => {
    const root = document.documentElement
    root.setAttribute('data-theme', theme)
    root.style.colorScheme = theme

    // Update meta theme-color
    const metaThemeColor = document.querySelector('meta[name="theme-color"]')
    const themeBg = theme === 'dark' ? '#0E0F12' : '#E8E6DF'
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', themeBg)
    }

    try {
      localStorage.setItem('theme', theme)
    } catch {
      // Ignore storage errors (private browsing, etc.)
    }

    // Dispatch event so any non-React listeners (like WebGL canvas) can respond immediately
    window.dispatchEvent(new CustomEvent('app-theme-change', { detail: { theme } }))
  }, [theme])

  // Listen to OS preference changes if no manual override is saved
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (e) => {
      const hasSaved = localStorage.getItem('theme')
      if (!hasSaved) {
        setThemeState(e.matches ? 'dark' : 'light')
      }
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const setTheme = (newTheme) => {
    if (newTheme === 'dark' || newTheme === 'light') {
      setThemeState(newTheme)
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}

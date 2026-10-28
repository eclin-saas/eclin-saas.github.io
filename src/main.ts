import './style.css'
import {
  ArrowRight, Calendar, Check, FileText, Menu, Moon, PieChart,
  ShieldCheck, Sparkles, Sun, Users, X, createIcons,
} from 'lucide'
import { renderRoute } from './app/router'
import { initializePrivacyConsent, mayStorePreferences } from './components/privacy-consent'

const iconSet = { ArrowRight, Calendar, Check, FileText, Menu, Moon, PieChart, ShieldCheck, Sparkles, Sun, Users, X }

function initializeTheme(): void {
  const root = document.documentElement
  let savedTheme: string | null = null
  if (mayStorePreferences()) {
    try { savedTheme = localStorage.getItem('theme') } catch { /* Storage may be unavailable. */ }
  }
  if (savedTheme === 'dark' || savedTheme === 'light') {
    root.setAttribute('data-theme', savedTheme)
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    root.setAttribute('data-theme', 'dark')
  }

  document.querySelectorAll<HTMLElement>('#theme-toggle, #mobile-theme-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'
      root.setAttribute('data-theme', nextTheme)
      if (mayStorePreferences()) {
        try { localStorage.setItem('theme', nextTheme) } catch { /* Storage may be unavailable. */ }
      }
    })
  })
}

function initializeMobileMenu(): void {
  const menuToggle = document.getElementById('menu-toggle')
  const mobileMenu = document.getElementById('mobile-menu')
  const setMobileMenu = (open: boolean) => {
    mobileMenu?.classList.toggle('open', open)
    menuToggle?.classList.toggle('open', open)
    menuToggle?.setAttribute('aria-expanded', String(open))
    mobileMenu?.setAttribute('aria-hidden', String(!open))
  }

  menuToggle?.addEventListener('click', () => setMobileMenu(!mobileMenu?.classList.contains('open')))
  document.querySelectorAll<HTMLAnchorElement>('.mobile-menu a').forEach((link) => {
    link.addEventListener('click', () => setMobileMenu(false))
  })
}

function initializeIcons(): void {
  createIcons({ icons: iconSet })
}

renderRoute()
initializeTheme()
initializeMobileMenu()
initializeIcons()
initializePrivacyConsent()

import logo from '../assets/eclin.svg'

const APP_URL = 'https://app.eclin.xyz'
const LOGIN_URL = `${APP_URL}/login`
const REGISTER_URL = `${APP_URL}/register`
const homePrefix = window.location.pathname === '/' ? '' : '/'

export function renderSiteHeader(): string {
  return `  <nav class="navbar" aria-label="Navegação principal">
    <div class="container nav-container">
      <a class="logo" href="${homePrefix}#inicio" aria-label="eClin — início">
        <img src="${logo}" alt="eClin" />
      </a>

      <div class="nav-links" id="desktop-nav">
        <a href="${homePrefix}#recursos" class="nav-link">Recursos</a>
        <a href="${homePrefix}#como-funciona" class="nav-link">Como funciona</a>
        <a href="${homePrefix}#planos" class="nav-link">Planos</a>
        <button id="theme-toggle" class="icon-btn" type="button" aria-label="Alternar tema">
          <i data-lucide="moon" class="moon-icon"></i>
          <i data-lucide="sun" class="sun-icon"></i>
        </button>
        <a class="btn btn-ghost btn-sm" href="${LOGIN_URL}">Entrar</a>
        <a class="btn btn-primary btn-sm" href="${REGISTER_URL}">Começar grátis</a>
      </div>

      <div class="mobile-actions">
        <button id="mobile-theme-toggle" class="icon-btn" type="button" aria-label="Alternar tema">
          <i data-lucide="moon" class="moon-icon"></i>
          <i data-lucide="sun" class="sun-icon"></i>
        </button>
        <button id="menu-toggle" class="icon-btn" type="button" aria-label="Abrir menu" aria-expanded="false">
          <i data-lucide="menu" class="menu-icon"></i>
          <i data-lucide="x" class="close-icon"></i>
        </button>
      </div>
    </div>

    <div id="mobile-menu" class="mobile-menu" aria-hidden="true">
      <div class="container mobile-menu-inner">
        <a href="${homePrefix}#recursos" class="mobile-link">Recursos</a>
        <a href="${homePrefix}#como-funciona" class="mobile-link">Como funciona</a>
        <a href="${homePrefix}#planos" class="mobile-link">Planos</a>
        <div class="mobile-cta-row">
          <a class="btn btn-outline w-full" href="${LOGIN_URL}">Entrar</a>
          <a class="btn btn-primary w-full" href="${REGISTER_URL}">Começar grátis</a>
        </div>
      </div>
    </div>
  </nav>

  `
}

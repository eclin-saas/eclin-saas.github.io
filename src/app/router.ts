import { renderHomePage } from '../pages/home'
import { renderPrivacyPage } from '../pages/privacy'
import { renderTermsPage } from '../pages/terms'

export function renderRoute(): void {
  const app = document.querySelector<HTMLElement>('#app')
  if (!app) throw new Error('Application root not found.')

  const path = window.location.pathname.replace(/\/$/, '') || '/'
  if (path === '/termos-de-uso') {
    document.title = 'Termos de Uso | eClin'
    app.innerHTML = renderTermsPage()
  } else if (path === '/privacidade') {
    document.title = 'Política de Privacidade | eClin'
    app.innerHTML = renderPrivacyPage()
  } else if (path === '/') {
    document.title = 'eClin — Gestão clínica em um só lugar'
    app.innerHTML = renderHomePage()
  } else {
    document.title = 'Página não encontrada | eClin'
    app.innerHTML = `<main class="legal-page"><section class="section"><div class="container legal-content"><h1>Página não encontrada</h1><p>O endereço acessado não existe ou foi alterado.</p><a class="btn btn-primary" href="/">Voltar para o início</a></div></section></main>`
  }
}

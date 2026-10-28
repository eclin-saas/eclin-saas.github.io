import logo from '../assets/eclin.svg'

const APP_URL = 'https://app.eclin.xyz'
const LOGIN_URL = `${APP_URL}/login`
const homePrefix = window.location.pathname === '/' ? '' : '/'

export function renderSiteFooter(): string {
  return `  <footer class="footer">
    <div class="container footer-grid">
      <div>
        <a class="logo footer-logo" href="${homePrefix}#inicio"><img src="${logo}" alt="eClin" /></a>
        <p>Gestão clínica para equipes que querem trabalhar com mais contexto e menos ruído.</p>
      </div>
      <div class="footer-links">
        <div><strong>Produto</strong><a href="${homePrefix}#recursos">Recursos</a><a href="${homePrefix}#planos">Planos</a><a href="${LOGIN_URL}">Entrar</a></div>
        <div><strong>eClin</strong><a href="mailto:contato@eclin.xyz">Contato</a><a href="mailto:suporte@eclin.xyz">Suporte</a><a href="/privacidade">Privacidade</a><a href="/termos-de-uso">Termos de Uso</a><button class="footer-text-button" type="button" data-open-privacy>Preferências de privacidade</button></div>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© 2026 eClin.</span>
      <span>eclin.xyz</span>
    </div>
  </footer>
  `
}

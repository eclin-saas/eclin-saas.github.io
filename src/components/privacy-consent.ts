const CONSENT_KEY = 'eclin-privacy-consent-v1'

type ConsentChoice = {
  necessary: true
  preferences: boolean
  decidedAt: string
}

function readConsent(): ConsentChoice | null {
  try {
    const value = localStorage.getItem(CONSENT_KEY)
    if (!value) return null
    const parsed = JSON.parse(value) as Partial<ConsentChoice>
    if (parsed.necessary !== true || typeof parsed.preferences !== 'boolean') return null
    return parsed as ConsentChoice
  } catch {
    return null
  }
}

function saveConsent(preferences: boolean): void {
  const choice: ConsentChoice = {
    necessary: true,
    preferences,
    decidedAt: new Date().toISOString(),
  }
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(choice))
    if (!preferences) localStorage.removeItem('theme')
  } catch {
    // The site remains usable when browser storage is unavailable.
  }
}

export function initializePrivacyConsent(): void {
  const existing = document.getElementById('privacy-consent-root')
  if (existing) existing.remove()

  const root = document.createElement('div')
  root.id = 'privacy-consent-root'
  root.innerHTML = `
    <div class="consent-backdrop" data-consent-backdrop hidden></div>
    <section class="consent-dialog" role="dialog" aria-modal="true" aria-labelledby="consent-title" aria-describedby="consent-description" hidden>
      <div class="consent-heading"><span class="section-kicker">Sua privacidade</span><h2 id="consent-title">Como usamos o armazenamento local</h2></div>
      <p id="consent-description">Usamos o armazenamento do navegador para lembrar sua escolha de privacidade e, se você permitir, sua preferência de tema. Não usamos cookies de publicidade ou ferramentas de análise neste site por meio deste recurso.</p>
      <div class="consent-category"><div><strong>Necessário</strong><p>Registra sua escolha de privacidade para não perguntar novamente a cada visita.</p></div><span class="consent-required">Sempre ativo</span></div>
      <div class="consent-category"><div><strong>Preferências</strong><p>Permite guardar localmente sua escolha entre tema claro e escuro.</p></div><span class="consent-optional">Opcional</span></div>
      <p class="consent-more">Você pode alterar sua escolha quando quiser pelo link “Preferências de privacidade” no rodapé. Saiba mais na <a href="/privacidade">Política de Privacidade</a>.</p>
      <div class="consent-actions"><button type="button" class="btn btn-outline" data-consent-necessary>Somente necessários</button><button type="button" class="btn btn-primary" data-consent-all>Aceitar preferências</button></div>
    </section>
  `
  document.body.append(root)

  const dialog = root.querySelector<HTMLElement>('.consent-dialog')!
  const backdrop = root.querySelector<HTMLElement>('[data-consent-backdrop]')!
  const open = () => {
    dialog.hidden = false
    backdrop.hidden = false
    document.body.classList.add('consent-open')
    root.querySelector<HTMLButtonElement>('[data-consent-necessary]')?.focus()
  }
  const close = () => {
    dialog.hidden = true
    backdrop.hidden = true
    document.body.classList.remove('consent-open')
  }
  const choose = (preferences: boolean) => {
    saveConsent(preferences)
    close()
  }

  root.querySelector('[data-consent-necessary]')?.addEventListener('click', () => choose(false))
  root.querySelector('[data-consent-all]')?.addEventListener('click', () => choose(true))
  document.querySelectorAll<HTMLButtonElement | HTMLAnchorElement>('[data-open-privacy]').forEach((control) => {
    control.addEventListener('click', (event) => {
      event.preventDefault()
      open()
    })
  })

  if (!readConsent()) open()
}

export function mayStorePreferences(): boolean {
  return readConsent()?.preferences === true
}

import './style.css'
import logo from './assets/eclin.svg'
import {
  ArrowRight,
  Calendar,
  Check,
  FileText,
  Menu,
  Moon,
  PieChart,
  ShieldCheck,
  Sparkles,
  Sun,
  Users,
  X,
  createIcons,
} from 'lucide'

const APP_URL = 'https://app.eclin.xyz'
const LOGIN_URL = `${APP_URL}/login`
const REGISTER_URL = `${APP_URL}/register`

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <nav class="navbar" aria-label="Navegação principal">
    <div class="container nav-container">
      <a class="logo" href="#inicio" aria-label="eClin — início">
        <img src="${logo}" alt="eClin" />
      </a>

      <div class="nav-links" id="desktop-nav">
        <a href="#recursos" class="nav-link">Recursos</a>
        <a href="#como-funciona" class="nav-link">Como funciona</a>
        <a href="#planos" class="nav-link">Planos</a>
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
        <a href="#recursos" class="mobile-link">Recursos</a>
        <a href="#como-funciona" class="mobile-link">Como funciona</a>
        <a href="#planos" class="mobile-link">Planos</a>
        <div class="mobile-cta-row">
          <a class="btn btn-outline w-full" href="${LOGIN_URL}">Entrar</a>
          <a class="btn btn-primary w-full" href="${REGISTER_URL}">Começar grátis</a>
        </div>
      </div>
    </div>
  </nav>

  <main>
    <section id="inicio" class="hero">
      <div class="hero-glow hero-glow-one"></div>
      <div class="hero-glow hero-glow-two"></div>
      <div class="container hero-layout">
        <div class="hero-copy">
          <div class="eyebrow">
            <span class="eyebrow-dot"></span>
            eClin está em beta
          </div>
          <h1 class="hero-title">
            A operação da sua clínica, <span>sem virar outra preocupação.</span>
          </h1>
          <p class="hero-subtitle">
            Agenda, pacientes, profissionais, prontuários e gestão em um único fluxo — pensado para clínicas e equipes multidisciplinares.
          </p>
          <div class="hero-actions">
            <a class="btn btn-primary btn-lg" href="${REGISTER_URL}">
              Testar gratuitamente
              <i data-lucide="arrow-right" class="icon-sm"></i>
            </a>
            <a class="btn btn-ghost btn-lg" href="#recursos">Conhecer recursos</a>
          </div>
          <div class="hero-proof" aria-label="Destaques do produto">
            <span><i data-lucide="check"></i> Comece em minutos</span>
            <span><i data-lucide="check"></i> Acesso por organização</span>
            <span><i data-lucide="check"></i> Feito para equipes de saúde</span>
          </div>
        </div>

        <div class="product-preview" aria-label="Prévia da interface do eClin">
          <div class="preview-window">
            <div class="preview-topbar">
              <div class="preview-brand">
                <span class="preview-logo-mark"></span>
                <strong>eClin</strong>
              </div>
              <div class="preview-user"></div>
            </div>
            <div class="preview-body">
              <aside class="preview-sidebar">
                <span class="active"></span><span></span><span></span><span></span><span></span>
              </aside>
              <div class="preview-content">
                <div class="preview-heading">
                  <div><small>Hoje</small><strong>Visão geral</strong></div>
                  <span class="preview-button">Novo atendimento</span>
                </div>
                <div class="preview-metrics">
                  <div><small>Atendimentos</small><strong>08</strong><em>hoje</em></div>
                  <div><small>Pacientes</small><strong>124</strong><em>ativos</em></div>
                  <div><small>Equipe</small><strong>06</strong><em>profissionais</em></div>
                </div>
                <div class="preview-panel">
                  <div class="preview-panel-head"><strong>Próximos atendimentos</strong><span></span></div>
                  <div class="preview-row"><i></i><div><strong>Ana Martins</strong><small>09:00 · Psicologia</small></div><b>Confirmado</b></div>
                  <div class="preview-row"><i></i><div><strong>Lucas Rocha</strong><small>10:30 · Fonoaudiologia</small></div><b>Confirmado</b></div>
                  <div class="preview-row"><i></i><div><strong>Marina Costa</strong><small>13:00 · Fisioterapia</small></div><b class="muted">Pendente</b></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="trust-strip" aria-label="Principais áreas do eClin">
      <div class="container trust-grid">
        <span>Agenda clínica</span>
        <span>Prontuário eletrônico</span>
        <span>Gestão de equipe</span>
        <span>Financeiro</span>
        <span>Relatórios</span>
      </div>
    </section>

    <section id="recursos" class="section resources-section">
      <div class="container">
        <div class="section-heading resources-heading">
          <div>
            <span class="section-kicker">Um sistema, uma rotina</span>
            <h2>As partes da clínica finalmente conversam entre si.</h2>
          </div>
          <p>
            Em vez de espalhar contexto entre agenda, planilhas, mensagens e prontuários,
            o eClin organiza a operação em um único fluxo.
          </p>
        </div>

        <div class="resource-stack">
          <article class="resource-row">
            <div class="resource-copy">
              <div class="resource-meta">
                <span class="resource-index">01</span>
                <span class="resource-label">Operação</span>
              </div>
              <h3>Agenda que trabalha como parte da clínica.</h3>
              <p>
                Disponibilidade, profissionais, salas, confirmação e contexto do atendimento
                ficam próximos — sem transformar o agendamento em uma planilha visual.
              </p>
              <ul class="resource-points">
                <li><i data-lucide="check"></i> Disponibilidade por profissional</li>
                <li><i data-lucide="check"></i> Salas e requisitos do atendimento</li>
                <li><i data-lucide="check"></i> Confirmação e acompanhamento da agenda</li>
              </ul>
            </div>

            <div class="resource-visual resource-agenda" aria-label="Ilustração da agenda do eClin">
              <div class="visual-toolbar">
                <div>
                  <small>Agenda</small>
                  <strong>Terça, 24 de agosto</strong>
                </div>
                <span>Hoje</span>
              </div>
              <div class="agenda-board">
                <div class="agenda-times">
                  <span>08:00</span><span>09:00</span><span>10:00</span><span>11:00</span>
                </div>
                <div class="agenda-columns">
                  <div class="agenda-column">
                    <small>Sala 01</small>
                    <div class="appointment appointment-blue">
                      <b>08:30</b><strong>Ana Martins</strong><span>Psicologia</span>
                    </div>
                    <div class="appointment appointment-green">
                      <b>10:00</b><strong>Lucas Rocha</strong><span>Fonoaudiologia</span>
                    </div>
                  </div>
                  <div class="agenda-column">
                    <small>Sala 02</small>
                    <div class="appointment appointment-violet offset">
                      <b>09:00</b><strong>Marina Costa</strong><span>Fisioterapia</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article class="resource-row reverse">
            <div class="resource-copy">
              <div class="resource-meta">
                <span class="resource-index">02</span>
                <span class="resource-label">Contexto clínico</span>
              </div>
              <h3>Prontuário organizado como uma história, não como um formulário.</h3>
              <p>
                Evoluções, anamnese e informações importantes permanecem acessíveis no
                contexto do paciente, permitindo acompanhar a continuidade do cuidado.
              </p>
              <ul class="resource-points">
                <li><i data-lucide="check"></i> Linha do tempo clínica</li>
                <li><i data-lucide="check"></i> Evoluções por atendimento</li>
                <li><i data-lucide="check"></i> Histórico centralizado do paciente</li>
              </ul>
            </div>

            <div class="resource-visual resource-record" aria-label="Ilustração de prontuário do eClin">
              <div class="patient-header">
                <div class="patient-avatar">AM</div>
                <div>
                  <strong>Ana Martins</strong>
                  <span>Paciente desde 2025</span>
                </div>
                <b>Ativo</b>
              </div>
              <div class="timeline">
                <div class="timeline-item current">
                  <i></i>
                  <div>
                    <small>Hoje · Psicologia</small>
                    <strong>Evolução clínica</strong>
                    <p>Boa adesão ao plano terapêutico e progressão consistente nas últimas semanas.</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <i></i>
                  <div>
                    <small>18 ago · Fonoaudiologia</small>
                    <strong>Acompanhamento</strong>
                    <p>Registro compartilhado no histórico longitudinal do paciente.</p>
                  </div>
                </div>
                <div class="timeline-item">
                  <i></i>
                  <div>
                    <small>11 ago · Avaliação inicial</small>
                    <strong>Anamnese</strong>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <article class="resource-row">
            <div class="resource-copy">
              <div class="resource-meta">
                <span class="resource-index">03</span>
                <span class="resource-label">Equipe</span>
              </div>
              <h3>Cada pessoa entra no eClin com uma responsabilidade clara.</h3>
              <p>
                Convide usuários, organize cargos e mantenha a estrutura preparada para
                separar o que é gestão, recepção, atendimento clínico e financeiro.
              </p>
              <ul class="resource-points">
                <li><i data-lucide="check"></i> Proprietário e administradores</li>
                <li><i data-lucide="check"></i> Recepção e profissionais</li>
                <li><i data-lucide="check"></i> Gestão financeira e acessos</li>
              </ul>
            </div>

            <div class="resource-visual resource-team" aria-label="Ilustração de gestão da equipe">
              <div class="team-head">
                <div>
                  <small>Equipe</small>
                  <strong>3 de 3 usuários</strong>
                </div>
                <span>Trial</span>
              </div>
              <div class="seat-meter"><i></i><i></i><i></i></div>
              <div class="team-list">
                <div><span class="avatar blue">JS</span><p><strong>João Silva</strong><small>Proprietário</small></p><b>Ativo</b></div>
                <div><span class="avatar green">MR</span><p><strong>Marina Rocha</strong><small>Recepção</small></p><b>Ativo</b></div>
                <div><span class="avatar violet">AC</span><p><strong>Ana Costa</strong><small>Profissional</small></p><b>Ativo</b></div>
              </div>
            </div>
          </article>

          <div class="resource-footer-grid">
            <article>
              <div class="resource-footer-icon amber"><i data-lucide="pie-chart"></i></div>
              <div>
                <span>Financeiro</span>
                <h3>Informação financeira perto da operação.</h3>
                <p>Pagamentos, recebimentos e visão gerencial sem criar um segundo fluxo paralelo.</p>
              </div>
            </article>
            <article>
              <div class="resource-footer-icon"><i data-lucide="shield-check"></i></div>
              <div>
                <span>Privacidade</span>
                <h3>Separação por organização desde a base.</h3>
                <p>Estrutura preparada para permissões e responsabilidades diferentes dentro da equipe.</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>

    <section id="como-funciona" class="section process-section">
      <div class="container process-layout">
        <div class="process-copy">
          <span class="section-kicker">Comece sem complicação</span>
          <h2>Da primeira configuração ao primeiro atendimento.</h2>
          <p>O eClin foi desenhado para crescer com a clínica sem exigir uma implantação pesada para começar.</p>
          <a class="text-link" href="${REGISTER_URL}">Criar minha conta <i data-lucide="arrow-right"></i></a>
        </div>
        <div class="process-steps">
          <article><span>01</span><div><h3>Crie sua organização</h3><p>Cadastre a clínica e comece o período de teste.</p></div></article>
          <article><span>02</span><div><h3>Organize sua equipe</h3><p>Cadastre profissionais e convide quem precisa acessar o sistema.</p></div></article>
          <article><span>03</span><div><h3>Comece a operar</h3><p>Pacientes, agenda e atendimentos passam a compartilhar o mesmo contexto.</p></div></article>
        </div>
      </div>
    </section>

    <section class="section story-section">
      <div class="container story-card">
        <div class="story-icon"><i data-lucide="sparkles"></i></div>
        <blockquote>
          “Software de clínica não precisa parecer software de 2009. O eClin está sendo construído para deixar a tecnologia em segundo plano e a rotina em primeiro.”
        </blockquote>
        <p>Uma plataforma em evolução contínua, construída a partir do fluxo real de atendimento.</p>
      </div>
    </section>

    <section id="planos" class="section pricing-section">
      <div class="container">
        <div class="section-heading centered-heading">
          <span class="section-kicker">Planos</span>
          <h2>Comece no beta. Evolua quando precisar.</h2>
          <p>Teste o eClin antes de escolher o plano definitivo para sua operação.</p>
        </div>

        <div class="pricing-grid">
          <article class="pricing-card">
            <div class="pricing-name">Consultório</div>
            <div class="price">R$ 97 <span>/ mês</span></div>
            <p>Para operações menores que querem centralizar a rotina.</p>
            <ul>
              <li><i data-lucide="check"></i> Até 3 usuários</li>
              <li><i data-lucide="check"></i> Agenda e pacientes</li>
              <li><i data-lucide="check"></i> Prontuário eletrônico</li>
              <li><i data-lucide="check"></i> Gestão da equipe</li>
            </ul>
            <a class="btn btn-outline w-full" href="${REGISTER_URL}">Começar teste</a>
          </article>

          <article class="pricing-card featured-pricing">
            <div class="pricing-badge">Para equipes</div>
            <div class="pricing-name">Clínica</div>
            <div class="price">R$ 247 <span>/ mês</span></div>
            <p>Para clínicas que precisam crescer sem limitar o número de acessos.</p>
            <ul>
              <li><i data-lucide="check"></i> Usuários ilimitados</li>
              <li><i data-lucide="check"></i> Todos os recursos do Consultório</li>
              <li><i data-lucide="check"></i> Fluxos financeiros e relatórios</li>
              <li><i data-lucide="check"></i> Estrutura preparada para equipes maiores</li>
            </ul>
            <a class="btn btn-primary w-full" href="${REGISTER_URL}">Começar teste</a>
          </article>
        </div>
        <p class="pricing-note">Durante o beta, condições comerciais e recursos dos planos podem evoluir.</p>
      </div>
    </section>

    <section class="final-cta section">
      <div class="container final-cta-inner">
        <div>
          <span class="section-kicker light">Pronto para testar?</span>
          <h2>Conheça o eClin com a sua própria rotina.</h2>
          <p>Crie sua organização e explore o sistema no ambiente real do produto.</p>
        </div>
        <a class="btn btn-light btn-lg" href="${REGISTER_URL}">
          Começar gratuitamente
          <i data-lucide="arrow-right"></i>
        </a>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container footer-grid">
      <div>
        <a class="logo footer-logo" href="#inicio"><img src="${logo}" alt="eClin" /></a>
        <p>Gestão clínica para equipes que querem trabalhar com mais contexto e menos ruído.</p>
      </div>
      <div class="footer-links">
        <div><strong>Produto</strong><a href="#recursos">Recursos</a><a href="#planos">Planos</a><a href="${LOGIN_URL}">Entrar</a></div>
        <div><strong>eClin</strong><a href="mailto:contato@eclin.xyz">Contato</a><a href="mailto:suporte@eclin.xyz">Suporte</a></div>
      </div>
    </div>
    <div class="container footer-bottom">
      <span>© 2026 eClin Software.</span>
      <span>eclin.xyz</span>
    </div>
  </footer>
`

createIcons({
  icons: {
    ArrowRight,
    Calendar,
    Check,
    FileText,
    Menu,
    Moon,
    PieChart,
      ShieldCheck,
    Sparkles,
    Sun,
    Users,
    X,
  },
})

const htmlElement = document.documentElement
const themeButtons = [
  document.getElementById('theme-toggle'),
  document.getElementById('mobile-theme-toggle'),
].filter(Boolean) as HTMLElement[]

const savedTheme = localStorage.getItem('theme')
if (savedTheme === 'dark' || savedTheme === 'light') {
  htmlElement.setAttribute('data-theme', savedTheme)
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  htmlElement.setAttribute('data-theme', 'dark')
}

const toggleTheme = () => {
  const currentTheme = htmlElement.getAttribute('data-theme')
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark'
  htmlElement.setAttribute('data-theme', newTheme)
  localStorage.setItem('theme', newTheme)
}

themeButtons.forEach((button) => button.addEventListener('click', toggleTheme))

const menuToggle = document.getElementById('menu-toggle')
const mobileMenu = document.getElementById('mobile-menu')

const setMobileMenu = (open: boolean) => {
  mobileMenu?.classList.toggle('open', open)
  menuToggle?.classList.toggle('open', open)
  menuToggle?.setAttribute('aria-expanded', String(open))
  mobileMenu?.setAttribute('aria-hidden', String(!open))
}

menuToggle?.addEventListener('click', () => {
  setMobileMenu(!mobileMenu?.classList.contains('open'))
})

document.querySelectorAll<HTMLAnchorElement>('.mobile-menu a').forEach((link) => {
  link.addEventListener('click', () => setMobileMenu(false))
})

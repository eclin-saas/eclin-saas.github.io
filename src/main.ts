import './style.css'
import logo from "./assets/eclin.svg"
import { createIcons, Calendar, FileText, PieChart, ShieldCheck, ArrowRight, Quote, Check, Sun, Moon } from 'lucide';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<nav class="navbar">
  <div class="container nav-container">
    <div class="logo">
      <img src="${logo}" width="100">
    </div>
    <div class="nav-links">
      <a href="#ferramentas" class="nav-link">Recursos</a>
      <a href="#depoimentos" class="nav-link">Depoimentos</a>
      <a href="#planos" class="nav-link">Planos</a>
      <button id="theme-toggle" class="icon-btn" aria-label="Mudar tema">
        <i data-lucide="moon" class="moon-icon"></i>
        <i data-lucide="sun" class="sun-icon"></i>
      </button>
      <button class="btn btn-outline btn-sm">Entrar</button>
    </div>
  </div>
</nav>

<main>
  <section class="hero container">
    <div class="hero-content">
      <span class="badge">Especial para Clínicas Interdisciplinares</span>
      <h1 class="hero-title">
        Gestão integrada para quem cuida de <span class="text-primary">pessoas.</span>
      </h1>
      <p class="hero-subtitle">
        Conecte psicólogos, médicos, fonoaudiólogos e toda a sua equipe em um único prontuário inteligente. Menos burocracia, mais tempo para seus pacientes.
      </p>
      <div class="hero-actions">
        <button class="btn btn-primary">
          Testar Gratuitamente
          <i data-lucide="arrow-right" class="icon-sm"></i>
        </button>
      </div>
    </div>
  </section>

  <section id="ferramentas" class="section bg-secondary">
    <div class="container">
      <div class="section-header">
        <h2>Tudo o que sua clínica precisa</h2>
        <p>Um ecossistema completo desenhado para a realidade do atendimento multidisciplinar.</p>
      </div>
      
      <div class="grid features-grid">
        <div class="card feature-card">
          <div class="icon-box bg-blue"><i data-lucide="calendar"></i></div>
          <h3>Agendamento Inteligente</h3>
          <p>Chega de conflitos. O sistema cruza as agendas de diferentes especialistas automaticamente para facilitar o atendimento do paciente no mesmo dia.</p>
        </div>

        <div class="card feature-card">
          <div class="icon-box bg-green"><i data-lucide="file-text"></i></div>
          <h3>Prontuário Unificado</h3>
          <p>Visão 360º do paciente. Evoluções de diferentes áreas (psicologia, fisioterapia, medicina) organizadas e acessíveis em uma única linha do tempo.</p>
        </div>

        <div class="card feature-card">
          <div class="icon-box bg-blue"><i data-lucide="pie-chart"></i></div>
          <h3>Gestão Financeira</h3>
          <p>Controle de repasses por profissional, faturamento de convênios e fluxo de caixa simplificado para garantir a saúde do seu negócio.</p>
        </div>

        <div class="card feature-card">
          <div class="icon-box bg-green"><i data-lucide="shield-check"></i></div>
          <h3>Controle de Acessos</h3>
          <p>Privacidade garantida (LGPD). Configure permissões para que cada profissional acesse apenas o que é pertinente ao seu conselho e função.</p>
        </div>
      </div>
    </div>
  </section>

  <section id="depoimentos" class="section">
    <div class="container">
      <div class="section-header">
        <h2>O que nossos parceiros dizem</h2>
        <p>Clínicas que transformaram suas rotinas com o eClin.</p>
      </div>
      
      <div class="grid testimonials-grid">
        <div class="card testimonial-card">
          <i data-lucide="quote" class="quote-icon"></i>
          <p class="testimonial-text">"A comunicação entre a neuropediatria e as terapeutas melhorou 100%. Ter o histórico evolutivo de todos os profissionais num só lugar mudou nossa clínica."</p>
          <div class="testimonial-author">
            <strong>Dra. Amanda Silva</strong>
            <span>Diretora Clínica, Espaço Desenvolver</span>
          </div>
        </div>

        <div class="card testimonial-card">
          <i data-lucide="quote" class="quote-icon"></i>
          <p class="testimonial-text">"Fazíamos o cálculo de repasse de 15 profissionais manualmente. Hoje o eClin faz isso em segundos no fim do mês. É libertador."</p>
          <div class="testimonial-author">
            <strong>Carlos Mendes</strong>
            <span>Gestor Financeiro, Clínica Integrar</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="planos" class="section bg-secondary">
    <div class="container">
      <div class="section-header">
        <h2>Planos que crescem com você</h2>
        <p>Sem taxas ocultas. Escolha o plano ideal para o tamanho da sua equipe.</p>
      </div>
      
      <div class="grid pricing-grid">
        <div class="card pricing-card">
          <div class="pricing-header">
            <h3>Consultório</h3>
            <div class="price">R$ 97<span>/mês</span></div>
            <p>Para profissionais autônomos ou duplas.</p>
          </div>
          <ul class="pricing-features">
            <li><i data-lucide="check"></i> Até 2 profissionais</li>
            <li><i data-lucide="check"></i> Prontuário eletrônico</li>
            <li><i data-lucide="check"></i> Agenda inteligente</li>
            <li class="disabled"><i data-lucide="check"></i> Controle de repasses</li>
          </ul>
          <button class="btn btn-outline w-full">Assinar Consultório</button>
        </div>

        <div class="card pricing-card popular">
          <div class="popular-badge">Mais Escolhido</div>
          <div class="pricing-header">
            <h3>Clínica</h3>
            <div class="price">R$ 247<span>/mês</span></div>
            <p>Para clínicas interdisciplinares em expansão.</p>
          </div>
          <ul class="pricing-features">
            <li><i data-lucide="check"></i> Até 10 profissionais</li>
            <li><i data-lucide="check"></i> Tudo do plano anterior</li>
            <li><i data-lucide="check"></i> Controle de repasses automático</li>
            <li><i data-lucide="check"></i> Suporte prioritário via WhatsApp</li>
          </ul>
          <button class="btn btn-primary w-full">Assinar Clínica</button>
        </div>
      </div>
    </div>
  </section>
</main>

<footer class="footer">
  <div class="container">
    <div class="footer-content">
      <div class="logo">
        <div class="logo-mark"></div>
        eClin
      </div>
      <p>&copy; 2026 eClin Software. Transformando o atendimento interdisciplinar.</p>
    </div>
  </div>
</footer>
`

// Inicializa os ícones do Lucide
createIcons({
  icons: { Calendar, FileText, PieChart, ShieldCheck, ArrowRight, Quote, Check, Sun, Moon }
});

// Lógica de Troca de Tema (Claro / Escuro)
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Verifica se há um tema salvo, ou usa a preferência do sistema
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  htmlElement.setAttribute('data-theme', savedTheme);
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  htmlElement.setAttribute('data-theme', 'dark');
}

// Evento de clique no botão
themeToggleBtn?.addEventListener('click', () => {
  const currentTheme = htmlElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});
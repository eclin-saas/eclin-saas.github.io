import { renderSiteHeader } from '../../components/site-header'
import { renderSiteFooter } from '../../components/site-footer'
import { LEGAL_DETAILS } from '../../config/legal'

export function renderTermsPage(): string {
  const demoNotice = LEGAL_DETAILS.demoRegistration
    ? '<aside class="legal-notice"><strong>Informações cadastrais demonstrativas</strong><p>Os dados de identificação apresentados nesta página são fictícios e serão atualizados quando os dados oficiais estiverem disponíveis.</p></aside>'
    : ''

  return `${renderSiteHeader()}
    <main class="legal-page">
      <section class="legal-hero"><div class="container legal-container">
        <a class="legal-back" href="/#inicio">← Voltar para o eClin</a>
        <span class="section-kicker">Condições de uso</span>
        <h1>Termos de Uso</h1>
        <p class="legal-lead">Estas condições explicam as regras para acessar e utilizar o site e a plataforma eClin.</p>
        <p class="legal-updated">Última atualização: ${LEGAL_DETAILS.lastUpdated}</p>
      </div></section>
      <section class="section legal-content-section"><article class="container legal-content">
        ${demoNotice}
        <section><h2>1. Identificação e contato</h2><p>O eClin é um serviço digital voltado à organização e à gestão de clínicas e equipes de saúde.</p><p><strong>Nome empresarial:</strong> ${LEGAL_DETAILS.legalName}<br><strong>CNPJ:</strong> ${LEGAL_DETAILS.taxId}<br><strong>Contato:</strong> <a href="mailto:${LEGAL_DETAILS.contactEmail}">${LEGAL_DETAILS.contactEmail}</a>.</p></section>
        <section><h2>2. Aceitação e acesso</h2><p>Ao acessar este site, você concorda em respeitar estes Termos e a legislação aplicável. O uso de funcionalidades que exigem cadastro pode depender de condições adicionais apresentadas no momento da contratação ou do cadastro.</p><p>Você deve fornecer informações verdadeiras, manter seus dados atualizados e proteger as credenciais de acesso. Não compartilhe senhas nem permita que pessoas não autorizadas utilizem sua conta.</p></section>
        <section><h2>3. Uso permitido</h2><p>O serviço deve ser utilizado para finalidades lícitas e de acordo com as permissões da conta. É proibido tentar acessar dados ou áreas sem autorização, comprometer a segurança ou a disponibilidade do sistema, contornar controles de acesso ou utilizar o serviço para violar direitos de terceiros.</p></section>
        <section><h2>4. Contas e permissões</h2><p>O titular da conta e os administradores da organização são responsáveis por gerenciar acessos e conceder permissões adequadas a cada integrante da equipe. Cada usuário deve utilizar apenas os recursos autorizados para sua função e comunicar suspeitas de acesso indevido.</p></section>
        <section><h2>5. Dados pessoais e informações de saúde</h2><p>O tratamento de dados pessoais é explicado na <a href="/privacidade">Política de Privacidade</a>. Informações de saúde são dados pessoais sensíveis e devem ser tratadas com os cuidados exigidos pela legislação.</p><p>As clínicas e os profissionais são responsáveis por avaliar a base legal para os dados que inserem, fornecer as informações necessárias aos pacientes, limitar o acesso às pessoas autorizadas e cumprir as obrigações que lhes cabem. O uso do eClin não substitui o julgamento profissional nem as responsabilidades clínicas, éticas ou legais de cada profissional.</p></section>
        <section><h2>6. Disponibilidade e atualizações</h2><p>Trabalhamos para manter o serviço disponível e seguro, mas podem ocorrer interrupções para manutenção, atualizações ou situações fora do nosso controle. Recursos, interfaces e funcionalidades podem evoluir. Quando uma mudança afetar materialmente as condições de uso, as informações pertinentes serão comunicadas por meios adequados.</p></section>
        <section><h2>7. Propriedade intelectual</h2><p>Os elementos do site e da plataforma, incluindo marcas, textos, interfaces e software, são protegidos pelas normas aplicáveis e pertencem aos respectivos titulares. Estes Termos não transferem direitos de propriedade intelectual. É permitido utilizar o serviço conforme sua finalidade e as permissões concedidas.</p></section>
        <section><h2>8. Limites e responsabilidades</h2><p>Na medida permitida pela legislação, cada parte responde pelos danos decorrentes de suas próprias ações ou omissões. Nada nestes Termos exclui direitos ou responsabilidades que não possam ser afastados por lei. O eClin é uma ferramenta de apoio à gestão e não substitui sistemas oficiais, avaliação clínica ou decisões tomadas por profissionais habilitados.</p></section>
        <section><h2>9. Suspensão e encerramento</h2><p>O acesso poderá ser limitado ou suspenso quando necessário para proteger a segurança, cumprir obrigações legais, investigar uso indevido ou aplicar condições contratuais válidas. Sempre que possível e adequado, o responsável pela conta será informado sobre o motivo e as medidas cabíveis.</p></section>
        <section><h2>10. Alterações destes Termos</h2><p>Estes Termos podem ser atualizados para refletir mudanças no serviço ou na legislação. A versão vigente será publicada nesta página com a data de atualização. Quando exigido, mudanças relevantes serão comunicadas de forma apropriada.</p></section>
        <section><h2>11. Legislação e contato</h2><p>Aplicam-se as leis da República Federativa do Brasil, respeitadas as regras de competência previstas na legislação. Para dúvidas sobre estes Termos, entre em contato pelo e-mail <a href="mailto:${LEGAL_DETAILS.contactEmail}">${LEGAL_DETAILS.contactEmail}</a>.</p></section>
      </article></section>
    </main>
    ${renderSiteFooter()}`
}

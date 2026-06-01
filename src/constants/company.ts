import {
  BadgeCheck,
  Banknote,
  ClipboardCheck,
  HandCoins,
  Handshake,
  LineChart,
  MessageCircle,
  Scale,
  ShieldCheck,
  TrendingUp,
} from 'lucide-vue-next';

export const company = {
  name: 'Horizonte Assessoria e Recuperação de Crédito',
  shortName: 'Horizonte',
  whatsapp: '5542999535325',
  phoneLabel: '(42) 99953-5325',
  email: 'atendimento@horizontecredito.com.br',
  address: 'Atendimento nacional com sede administrativa no Brasil',
  workingHours: 'Segunda a sexta, das 8h às 18h',
  tagline: 'Assessoria financeira com estratégia, discrição e foco em resultado.',
};

export const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Serviços', to: '/servicos' },
  { label: 'Contato', to: '/contato' },
];

export const stats = [
  { value: '+3.200', label: 'atendimentos analisados' },
  { value: '92%', label: 'dos casos com plano em até 24h' },
  { value: '100%', label: 'atendimento consultivo e sigiloso' },
];

export const services = [
  {
    title: 'Recuperação de crédito',
    description:
      'Análise do cenário financeiro, identificação de restrições e condução de estratégias para reconstruir seu acesso ao crédito.',
    icon: TrendingUp,
  },
  {
    title: 'Negociação de dívidas',
    description:
      'Intermediação profissional com credores para buscar acordos possíveis, parcelas sustentáveis e redução de pressão financeira.',
    icon: HandCoins,
  },
  {
    title: 'Regularização financeira',
    description:
      'Organização de pendências, priorização de débitos e acompanhamento até a estabilização da vida financeira.',
    icon: ClipboardCheck,
  },
  {
    title: 'Consultoria financeira',
    description:
      'Orientação personalizada para tomada de decisão, prevenção de novas restrições e planejamento de retomada.',
    icon: LineChart,
  },
  {
    title: 'Cobrança amigável',
    description:
      'Atuação equilibrada para empresas que precisam recuperar valores preservando relacionamento e reputação.',
    icon: Handshake,
  },
];

export const steps = [
  {
    title: 'Diagnóstico do caso',
    description: 'Entendemos sua situação, documentos disponíveis, urgência e objetivo financeiro.',
  },
  {
    title: 'Estratégia de negociação',
    description: 'Definimos prioridades, possibilidades de acordo e riscos antes de qualquer decisão.',
  },
  {
    title: 'Condução e acompanhamento',
    description: 'Acompanhamos tratativas, prazos e próximos passos com comunicação clara.',
  },
];

export const benefits = [
  { title: 'Sigilo absoluto', description: 'Seu caso é tratado com discrição e cuidado.', icon: ShieldCheck },
  { title: 'Atendimento humano', description: 'Você fala com especialistas, não com respostas genéricas.', icon: MessageCircle },
  { title: 'Visão estratégica', description: 'Cada ação considera impacto financeiro, jurídico e reputacional.', icon: Scale },
  { title: 'Processo claro', description: 'Sem promessas vazias: você acompanha o plano e as etapas.', icon: BadgeCheck },
];

export const testimonials = [
  {
    name: 'Marina C.',
    role: 'Empreendedora',
    text: 'Eu estava sem saber por onde começar. A Horizonte organizou minhas pendências e negociou com clareza. Em poucas semanas eu já tinha um caminho realista.',
  },
  {
    name: 'Roberto A.',
    role: 'Representante comercial',
    text: 'O atendimento foi muito profissional. Explicaram os riscos, as opções e conduziram tudo sem pressão. Senti segurança desde o primeiro contato.',
  },
  {
    name: 'Fernanda L.',
    role: 'Gestora administrativa',
    text: 'Contratamos a cobrança amigável para clientes antigos e o resultado preservou relacionamento. Foi firme, elegante e efetivo.',
  },
];

export const faqs = [
  {
    question: 'A Horizonte promete limpar meu nome imediatamente?',
    answer:
      'Não trabalhamos com promessas irreais. Fazemos uma análise responsável, buscamos negociações viáveis e orientamos os passos para regularização com segurança.',
  },
  {
    question: 'O atendimento é feito pelo WhatsApp?',
    answer:
      'Sim. O primeiro contato pode ser feito pelo WhatsApp para agilizar o diagnóstico. Quando necessário, seguimos com documentos e reuniões remotas.',
  },
  {
    question: 'Vocês atendem empresas e pessoas físicas?',
    answer:
      'Sim. Atuamos em casos de pessoa física, profissionais autônomos e empresas que precisam recuperar crédito ou negociar pendências.',
  },
  {
    question: 'Meus dados ficam protegidos?',
    answer:
      'Sim. A confidencialidade é parte central do atendimento. Solicitamos apenas informações necessárias para a análise e condução do caso.',
  },
];

export const values = [
  'Transparência em cada orientação',
  'Discrição no tratamento de dados e negociações',
  'Responsabilidade nas propostas apresentadas',
  'Foco em soluções sustentáveis',
];

export const audiencePainPoints = [
  'Nome negativado impedindo crédito ou financiamento',
  'Dívidas acumuladas sem clareza de prioridade',
  'Cobranças constantes e desgaste emocional',
  'Empresas com valores em aberto e relacionamento sensível',
];

export const trustBadges = ['Análise sigilosa', 'Atendimento nacional', 'Plano personalizado'];

export const serviceHighlights = [
  'Diagnóstico claro antes da contratação',
  'Linguagem simples e orientação objetiva',
  'Acompanhamento durante as etapas decisivas',
  'Preparado para integração com CRM e backend',
];

export const floatingActions = {
  whatsappLabel: 'Falar com especialista',
  defaultMessage:
    'Olá, vim pelo site da Horizonte e gostaria de uma análise para recuperação de crédito.',
};

export const premiumIcon = Banknote;

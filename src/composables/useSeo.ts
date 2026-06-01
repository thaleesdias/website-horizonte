import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

import { company } from '@/constants/company';

const descriptions: Record<string, string> = {
  Home: 'Assessoria especializada para recuperação de crédito, negociação de dívidas e regularização financeira com atendimento sigiloso pelo WhatsApp.',
  Sobre: 'Conheça a Horizonte Assessoria e Recuperação de Crédito, uma consultoria focada em estratégia, confiança e reestruturação financeira responsável.',
  Serviços: 'Serviços de recuperação de crédito, negociação de dívidas, regularização financeira, consultoria e cobrança amigável.',
  Contato: 'Fale com a Horizonte pelo WhatsApp ou formulário e receba uma análise inicial para organizar sua situação financeira.',
};

export function useSeo() {
  const route = useRoute();

  const applySeo = () => {
    const title = route.meta.title ? `${String(route.meta.title)} | ${company.shortName}` : company.name;
    const description = descriptions[String(route.name)] ?? descriptions.Home;

    document.title = title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', description);
  };

  onMounted(applySeo);
  watch(() => route.fullPath, applySeo);
}

import { computed, toValue, type MaybeRefOrGetter } from 'vue';

import { company, floatingActions } from '@/constants/company';

export function useWhatsApp(message: MaybeRefOrGetter<string> = floatingActions.defaultMessage) {
  const whatsappUrl = computed(() => {
    const encoded = encodeURIComponent(toValue(message));
    return `https://wa.me/${company.whatsapp}?text=${encoded}`;
  });

  return {
    whatsappUrl,
  };
}

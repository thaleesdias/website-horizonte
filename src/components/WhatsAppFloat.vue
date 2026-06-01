<script setup lang="ts">
import { MessageCircle } from 'lucide-vue-next';

import { floatingActions } from '@/constants/company';
import { useWhatsApp } from '@/composables/useWhatsApp';

const { whatsappUrl } = useWhatsApp();
</script>

<template>
  <a
    :href="whatsappUrl"
    target="_blank"
    rel="noopener noreferrer"
    class="fixed bottom-5 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-black/25 transition hover:-translate-y-1 hover:brightness-105 md:h-auto md:w-auto md:gap-2 md:rounded-md md:px-5 md:py-3"
    :aria-label="floatingActions.whatsappLabel"
  >
    <MessageCircle class="h-6 w-6" />
    <span class="hidden text-sm font-semibold md:inline">{{ floatingActions.whatsappLabel }}</span>
  </a>
</template>

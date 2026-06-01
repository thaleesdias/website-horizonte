<script setup lang="ts">
import { ArrowRight, MessageCircle } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';

import { useWhatsApp } from '@/composables/useWhatsApp';

const { whatsappUrl } = useWhatsApp('Olá, quero falar com um especialista da Horizonte sobre meu caso.');
</script>

<template>
  <section class="bg-hero-radial px-4 py-20 text-white sm:px-6 lg:px-8">
    <div class="mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-[1fr_auto]">
      <div>
        <p class="text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">Análise inicial</p>
        <h2 class="mt-4 max-w-3xl text-3xl font-semibold tracking-normal sm:text-5xl">Quanto antes existe estratégia, menor tende a ser o desgaste financeiro.</h2>
        <p class="mt-5 max-w-2xl text-base leading-7 text-white/74">
          Fale com a Horizonte e receba uma orientação clara sobre os próximos passos para regularizar sua situação ou recuperar valores em aberto.
        </p>
      </div>
      <div class="flex flex-col gap-3 sm:flex-row md:flex-col">
        <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 rounded-md bg-gold-500 px-6 py-4 text-sm font-semibold text-navy-950 shadow-gold transition hover:bg-gold-400">
          <MessageCircle class="h-4 w-4" />
          Chamar no WhatsApp
        </a>
        <RouterLink to="/contato" class="inline-flex items-center justify-center gap-2 rounded-md border border-white/18 px-6 py-4 text-sm font-semibold text-white transition hover:border-gold-300 hover:text-gold-300">
          Enviar mensagem
          <ArrowRight class="h-4 w-4" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { MessageCircle } from 'lucide-vue-next';

import CtaSection from '@/components/CtaSection.vue';
import SectionHeader from '@/components/SectionHeader.vue';
import { serviceHighlights, services } from '@/constants/company';
import { useWhatsApp } from '@/composables/useWhatsApp';

const { whatsappUrl } = useWhatsApp('Olá, quero entender qual serviço da Horizonte se encaixa no meu caso.');
</script>

<template>
  <section class="bg-hero-radial px-4 pb-16 pt-32 text-white sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">Serviços</p>
      <h1 class="mt-4 max-w-4xl text-4xl font-semibold tracking-normal sm:text-6xl">Soluções financeiras com análise, negociação e acompanhamento.</h1>
      <p class="mt-6 max-w-3xl text-lg leading-8 text-white/74">
        Cada serviço foi desenhado para reduzir incerteza e construir um plano de ação possível, seja para pessoa física, autônomo ou empresa.
      </p>
    </div>
  </section>

  <section class="px-4 py-20 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <SectionHeader eyebrow="Especialidades" title="Atuação completa para diferentes momentos financeiros" align="center" />
      <div class="mt-12 grid gap-6 md:grid-cols-2">
        <article v-for="service in services" :key="service.title" class="rounded-md border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-gold-400 hover:shadow-premium">
          <component :is="service.icon" class="h-10 w-10 text-gold-500" />
          <h2 class="mt-5 text-2xl font-semibold text-navy-900">{{ service.title }}</h2>
          <p class="mt-3 leading-7 text-slate-600">{{ service.description }}</p>
          <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 transition hover:text-gold-500">
            <MessageCircle class="h-4 w-4" />
            Solicitar análise
          </a>
        </article>
      </div>
    </div>
  </section>

  <section class="bg-white px-4 py-20 sm:px-6 lg:px-8">
    <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <SectionHeader
        eyebrow="Método"
        title="Antes de negociar, a Horizonte entende o que realmente precisa ser protegido"
        description="A melhor solução não é apenas reduzir uma dívida. É preservar fluxo de caixa, reputação, acesso a crédito e tranquilidade para decidir."
      />
      <div class="grid gap-4 sm:grid-cols-2">
        <div v-for="highlight in serviceHighlights" :key="highlight" class="rounded-md bg-porcelain p-5 text-sm font-medium leading-6 text-navy-900">
          {{ highlight }}
        </div>
      </div>
    </div>
  </section>

  <CtaSection />
</template>

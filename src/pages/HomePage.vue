<script setup lang="ts">
import { ArrowRight, CheckCircle2, MessageCircle } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';

import CtaSection from '@/components/CtaSection.vue';
import SectionHeader from '@/components/SectionHeader.vue';
import { benefits, faqs, services, stats, steps, testimonials, trustBadges } from '@/constants/company';
import { useWhatsApp } from '@/composables/useWhatsApp';

const { whatsappUrl } = useWhatsApp();
</script>

<template>
  <section class="relative overflow-hidden bg-hero-radial px-4 pb-16 pt-32 text-white sm:px-6 lg:px-8">
    <div class="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-porcelain to-transparent"></div>
    <div class="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
      <div>
        <div class="mb-6 flex flex-wrap gap-2">
          <span v-for="badge in trustBadges" :key="badge" class="rounded-md border border-white/12 bg-white/[0.08] px-3 py-2 text-xs font-medium text-white/82 backdrop-blur">
            {{ badge }}
          </span>
        </div>
        <h1 class="max-w-4xl text-4xl font-semibold tracking-normal sm:text-6xl lg:text-7xl">
          Recupere seu crédito com estratégia e atendimento sigiloso.
        </h1>
        <p class="mt-6 max-w-2xl text-lg leading-8 text-white/76">
          A Horizonte analisa seu caso, estrutura negociações e orienta os próximos passos para você sair da pressão financeira com clareza, segurança e acompanhamento profissional.
        </p>
        <div class="mt-8 flex flex-col gap-3 sm:flex-row">
          <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center gap-2 rounded-md bg-gold-500 px-6 py-4 text-sm font-semibold text-navy-950 shadow-gold transition hover:bg-gold-400">
            <MessageCircle class="h-4 w-4" />
            Falar com especialista
          </a>
          <RouterLink to="/servicos" class="inline-flex items-center justify-center gap-2 rounded-md border border-white/18 px-6 py-4 text-sm font-semibold text-white transition hover:border-gold-300 hover:text-gold-300">
            Conhecer serviços
            <ArrowRight class="h-4 w-4" />
          </RouterLink>
        </div>
      </div>

      <div class="relative">
        <div class="rounded-md border border-white/12 bg-white/10 p-6 shadow-premium backdrop-blur-xl">
          <img src="@/assets/logo-horizonte.png" alt="Logo Horizonte Assessoria e Recuperação de Crédito" class="mx-auto aspect-square w-full max-w-md rounded-full object-cover shadow-2xl shadow-black/30" />
          <div class="mt-6 grid gap-3 sm:grid-cols-3">
            <div v-for="item in stats" :key="item.label" class="rounded-md bg-white/10 p-4">
              <strong class="block text-2xl font-semibold text-gold-300">{{ item.value }}</strong>
              <span class="mt-1 block text-xs leading-5 text-white/70">{{ item.label }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="px-4 py-20 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <SectionHeader
        eyebrow="Serviços"
        title="Soluções para reorganizar, negociar e reconstruir confiança financeira"
        description="Atuamos com uma visão consultiva: entendemos o problema, reduzimos ruídos e conduzimos o caminho com responsabilidade."
        align="center"
      />
      <div class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        <article v-for="service in services" :key="service.title" class="group rounded-md border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-gold-400 hover:shadow-premium">
          <component :is="service.icon" class="h-9 w-9 text-gold-500" />
          <h3 class="mt-5 text-xl font-semibold text-navy-900">{{ service.title }}</h3>
          <p class="mt-3 text-sm leading-6 text-slate-600">{{ service.description }}</p>
        </article>
      </div>
    </div>
  </section>

  <section class="bg-white px-4 py-20 sm:px-6 lg:px-8">
    <div class="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
      <SectionHeader
        eyebrow="Como funciona"
        title="Um processo direto, sem pressão e com decisões bem explicadas"
        description="Você entende o que pode ser feito antes de assumir qualquer compromisso. A prioridade é construir um plano possível."
      />
      <div class="grid gap-5">
        <div v-for="(step, index) in steps" :key="step.title" class="rounded-md border border-slate-200 bg-porcelain p-6">
          <span class="text-sm font-semibold text-gold-500">0{{ index + 1 }}</span>
          <h3 class="mt-2 text-xl font-semibold text-navy-900">{{ step.title }}</h3>
          <p class="mt-2 text-sm leading-6 text-slate-600">{{ step.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="px-4 py-20 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <SectionHeader eyebrow="Benefícios" title="O que muda quando você tem orientação especializada" align="center" />
      <div class="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        <div v-for="benefit in benefits" :key="benefit.title" class="rounded-md bg-navy-900 p-6 text-white shadow-premium">
          <component :is="benefit.icon" class="h-8 w-8 text-gold-300" />
          <h3 class="mt-5 text-lg font-semibold">{{ benefit.title }}</h3>
          <p class="mt-3 text-sm leading-6 text-white/68">{{ benefit.description }}</p>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-white px-4 py-20 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <SectionHeader eyebrow="Depoimentos" title="Atendimento que transmite segurança em momentos delicados" align="center" />
      <div class="mt-12 grid gap-5 lg:grid-cols-3">
        <figure v-for="testimonial in testimonials" :key="testimonial.name" class="rounded-md border border-slate-200 p-6">
          <blockquote class="text-sm leading-7 text-slate-600">“{{ testimonial.text }}”</blockquote>
          <figcaption class="mt-6 border-t border-slate-200 pt-4">
            <strong class="block text-navy-900">{{ testimonial.name }}</strong>
            <span class="text-sm text-slate-500">{{ testimonial.role }}</span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>

  <section class="px-4 py-20 sm:px-6 lg:px-8">
    <div class="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.85fr_1.15fr]">
      <SectionHeader eyebrow="FAQ" title="Perguntas frequentes antes do primeiro atendimento" />
      <div class="grid gap-4">
        <details v-for="faq in faqs" :key="faq.question" class="group rounded-md border border-slate-200 bg-white p-5">
          <summary class="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-navy-900">
            {{ faq.question }}
            <CheckCircle2 class="h-5 w-5 shrink-0 text-gold-500" />
          </summary>
          <p class="mt-4 text-sm leading-6 text-slate-600">{{ faq.answer }}</p>
        </details>
      </div>
    </div>
  </section>

  <CtaSection />
</template>

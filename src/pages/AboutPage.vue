<script setup lang="ts">
import CtaSection from '@/components/CtaSection.vue';
import SectionHeader from '@/components/SectionHeader.vue';
import { audiencePainPoints, values } from '@/constants/company';
</script>

<template>
  <section class="bg-hero-radial px-4 pb-16 pt-32 text-white sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">Sobre a Horizonte</p>
      <h1 class="mt-4 max-w-4xl text-4xl font-semibold tracking-normal sm:text-6xl">Assessoria feita para trazer clareza quando o cenário financeiro parece travado.</h1>
      <p class="mt-6 max-w-3xl text-lg leading-8 text-white/74">
        A Horizonte nasceu para atender pessoas e empresas que precisam negociar com inteligência, recuperar crédito e tomar decisões financeiras com segurança.
      </p>
    </div>
  </section>

  <section class="px-4 py-20 sm:px-6 lg:px-8">
    <div class="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr]">
      <div>
        <img src="@/assets/logo-horizonte.png" alt="Identidade visual Horizonte" class="mx-auto aspect-square max-w-sm rounded-full object-cover shadow-premium" />
      </div>
      <div>
        <SectionHeader eyebrow="Nossa história" title="Profissionalismo para lidar com conversas difíceis" />
        <div class="mt-6 space-y-5 text-base leading-8 text-slate-600">
          <p>
            Muitos problemas financeiros não começam pela falta de vontade de resolver, mas pela ausência de orientação. A Horizonte atua nesse ponto: organiza informações, identifica riscos e transforma pressão em um plano claro.
          </p>
          <p>
            Nosso atendimento combina postura consultiva, negociação responsável e comunicação objetiva. Cada caso recebe análise própria, porque dívidas, restrições e cobranças têm impactos diferentes para cada pessoa ou empresa.
          </p>
          <p>
            A missão é ampliar possibilidades: recuperar crédito, preservar reputação e construir acordos sustentáveis, sempre com sigilo e transparência.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="bg-white px-4 py-20 sm:px-6 lg:px-8">
    <div class="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">
      <div class="rounded-md border border-slate-200 p-8">
        <h2 class="text-2xl font-semibold text-navy-900">Missão</h2>
        <p class="mt-4 leading-7 text-slate-600">
          Conduzir pessoas e empresas a uma regularização financeira mais segura, com estratégia, linguagem clara e negociações responsáveis.
        </p>
      </div>
      <div class="rounded-md border border-slate-200 p-8">
        <h2 class="text-2xl font-semibold text-navy-900">Diferenciais</h2>
        <p class="mt-4 leading-7 text-slate-600">
          Atendimento humano, análise individualizada, confidencialidade e foco em resultados possíveis, sem promessas automáticas ou atalhos arriscados.
        </p>
      </div>
    </div>
  </section>

  <section class="px-4 py-20 sm:px-6 lg:px-8">
    <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2">
      <div>
        <SectionHeader eyebrow="Valores" title="Uma assessoria precisa ser firme, mas também responsável" />
        <div class="mt-8 grid gap-3">
          <div v-for="value in values" :key="value" class="rounded-md bg-white p-4 text-sm font-medium text-navy-900 shadow-sm">
            {{ value }}
          </div>
        </div>
      </div>
      <div>
        <SectionHeader eyebrow="Quando procurar" title="Sinais de que uma análise profissional pode ajudar" />
        <div class="mt-8 grid gap-3">
          <div v-for="point in audiencePainPoints" :key="point" class="rounded-md border border-slate-200 bg-white p-4 text-sm text-slate-600">
            {{ point }}
          </div>
        </div>
      </div>
    </div>
  </section>

  <CtaSection />
</template>

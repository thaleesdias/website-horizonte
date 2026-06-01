<script setup lang="ts">
import { Mail, MapPin, MessageCircle } from 'lucide-vue-next';
import { RouterLink } from 'vue-router';

import { company, navigation } from '@/constants/company';
import { useWhatsApp } from '@/composables/useWhatsApp';

const { whatsappUrl } = useWhatsApp();
</script>

<template>
  <footer class="bg-navy-950 text-white">
    <div class="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[1.2fr_0.8fr_1fr] lg:px-8">
      <div>
        <img src="@/assets/logo-horizonte.png" :alt="company.name" class="mb-5 h-16 w-16 rounded-full object-cover ring-1 ring-gold-400/70" />
        <h2 class="text-xl font-semibold">Horizonte Assessoria e Recuperação de Crédito</h2>
        <p class="mt-4 max-w-md text-sm leading-6 text-white/68">
          Assessoria consultiva para quem precisa recuperar crédito, negociar dívidas e retomar controle financeiro com segurança.
        </p>
      </div>

      <div>
        <h3 class="text-sm font-semibold uppercase tracking-[0.18em] text-gold-300">Navegação</h3>
        <div class="mt-5 grid gap-3">
          <RouterLink v-for="item in navigation" :key="item.to" :to="item.to" class="text-sm text-white/70 transition hover:text-gold-300">
            {{ item.label }}
          </RouterLink>
        </div>
      </div>

      <div>
        <h3 class="text-sm font-semibold uppercase tracking-[0.18em] text-gold-300">Contato</h3>
        <div class="mt-5 grid gap-4 text-sm text-white/72">
          <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="flex items-center gap-3 transition hover:text-gold-300">
            <MessageCircle class="h-4 w-4" /> {{ company.phoneLabel }}
          </a>
          <a :href="`mailto:${company.email}`" class="flex items-center gap-3 transition hover:text-gold-300">
            <Mail class="h-4 w-4" /> {{ company.email }}
          </a>
          <span class="flex items-center gap-3"><MapPin class="h-4 w-4" /> {{ company.address }}</span>
        </div>
      </div>
    </div>
    <div class="border-t border-white/10 px-4 py-5 text-center text-xs text-white/50">
      © {{ new Date().getFullYear() }} Horizonte. Todos os direitos reservados.
    </div>
  </footer>
</template>

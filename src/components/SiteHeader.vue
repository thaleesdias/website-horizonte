<script setup lang="ts">
import { Menu, MessageCircle, X } from 'lucide-vue-next';
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

import { company, navigation } from '@/constants/company';
import { useWhatsApp } from '@/composables/useWhatsApp';

const isOpen = ref(false);
const { whatsappUrl } = useWhatsApp();
</script>

<template>
  <header class="fixed inset-x-0 top-0 z-50 border-b border-gold-300/20 bg-navy-950 shadow-lg shadow-navy-950/20">
    <nav class="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8" aria-label="Navegação principal">
      <RouterLink to="/" class="flex items-center gap-3" @click="isOpen = false">
        <img src="@/assets/logo-horizonte.png" :alt="company.name" class="h-12 w-12 rounded-full object-cover ring-1 ring-gold-400/60" />
        <div class="leading-tight">
          <strong class="block text-base font-semibold tracking-wide text-white">Horizonte</strong>
          <span class="text-xs uppercase tracking-[0.22em] text-gold-300">Assessoria</span>
        </div>
      </RouterLink>

      <div class="hidden items-center gap-8 lg:flex">
        <RouterLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="rounded-md px-3 py-2 text-sm font-semibold text-white transition hover:bg-white/[0.08] hover:text-gold-300"
          active-class="bg-white/[0.08] text-gold-300"
        >
          {{ item.label }}
        </RouterLink>
      </div>

      <a
        :href="whatsappUrl"
        target="_blank"
        rel="noopener noreferrer"
        class="hidden items-center gap-2 rounded-md bg-gold-500 px-5 py-3 text-sm font-semibold text-navy-950 shadow-gold transition hover:bg-gold-400 lg:inline-flex"
      >
        <MessageCircle class="h-4 w-4" />
        WhatsApp
      </a>

      <button
        class="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 bg-white/[0.06] text-white transition hover:border-gold-300 hover:text-gold-300 lg:hidden"
        type="button"
        aria-label="Abrir menu"
        @click="isOpen = !isOpen"
      >
        <X v-if="isOpen" class="h-5 w-5" />
        <Menu v-else class="h-5 w-5" />
      </button>
    </nav>

    <Transition name="slide-fade">
      <div v-if="isOpen" class="border-t border-gold-300/15 bg-navy-950 px-4 py-5 lg:hidden">
        <div class="mx-auto grid max-w-7xl gap-2">
          <RouterLink
            v-for="item in navigation"
            :key="item.to"
            :to="item.to"
            class="rounded-md px-3 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08] hover:text-gold-300"
            active-class="bg-white/[0.08] text-gold-300"
            @click="isOpen = false"
          >
            {{ item.label }}
          </RouterLink>
          <a
            :href="whatsappUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="mt-3 inline-flex items-center justify-center gap-2 rounded-md bg-gold-500 px-5 py-3 text-sm font-semibold text-navy-950"
          >
            <MessageCircle class="h-4 w-4" />
            Falar com especialista
          </a>
        </div>
      </div>
    </Transition>
  </header>
</template>

<script setup lang="ts">
import { computed, reactive } from 'vue';
import { Mail, MapPin, MessageCircle, Phone } from 'lucide-vue-next';

import SectionHeader from '@/components/SectionHeader.vue';
import { company } from '@/constants/company';
import { useWhatsApp } from '@/composables/useWhatsApp';
import { useContactStore } from '@/stores/contactStore';

const contactStore = useContactStore();
const form = reactive({
  name: '',
  phone: '',
  message: '',
});

const errors = reactive({
  name: '',
  phone: '',
  message: '',
});

const whatsappMessage = computed(() => {
  const name = form.name || 'Visitante';
  const text = form.message || 'Gostaria de uma análise para recuperação de crédito.';
  return `Olá, sou ${name}. ${text}`;
});

const { whatsappUrl } = useWhatsApp(whatsappMessage);

function validate() {
  errors.name = form.name.trim().length < 3 ? 'Informe seu nome completo.' : '';
  errors.phone = form.phone.trim().length < 10 ? 'Informe um telefone válido com DDD.' : '';
  errors.message = form.message.trim().length < 12 ? 'Descreva brevemente sua situação.' : '';
  return !errors.name && !errors.phone && !errors.message;
}

async function onSubmit() {
  if (!validate()) return;
  await contactStore.send({ ...form });
  form.name = '';
  form.phone = '';
  form.message = '';
}
</script>

<template>
  <section class="bg-hero-radial px-4 pb-16 pt-32 text-white sm:px-6 lg:px-8">
    <div class="mx-auto max-w-7xl">
      <p class="text-sm font-semibold uppercase tracking-[0.2em] text-gold-300">Contato</p>
      <h1 class="mt-4 max-w-4xl text-4xl font-semibold tracking-normal sm:text-6xl">Fale com a Horizonte e receba uma primeira orientação.</h1>
      <p class="mt-6 max-w-3xl text-lg leading-8 text-white/74">
        Envie seus dados pelo formulário ou chame diretamente no WhatsApp. O atendimento é sigiloso e pensado para entender seu caso com seriedade.
      </p>
    </div>
  </section>

  <section class="px-4 py-20 sm:px-6 lg:px-8">
    <div class="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr]">
      <div class="rounded-md border border-slate-200 bg-white p-6 shadow-premium sm:p-8">
        <SectionHeader eyebrow="Mensagem" title="Conte rapidamente o que você precisa resolver" />
        <form class="mt-8 grid gap-5" @submit.prevent="onSubmit">
          <label class="grid gap-2">
            <span class="text-sm font-semibold text-navy-900">Nome</span>
            <input v-model="form.name" class="h-12 rounded-md border border-slate-200 px-4 outline-none transition focus:border-gold-500 focus:ring-4 focus:ring-gold-500/15" type="text" autocomplete="name" />
            <span v-if="errors.name" class="text-sm text-red-600">{{ errors.name }}</span>
          </label>

          <label class="grid gap-2">
            <span class="text-sm font-semibold text-navy-900">Telefone</span>
            <input v-model="form.phone" class="h-12 rounded-md border border-slate-200 px-4 outline-none transition focus:border-gold-500 focus:ring-4 focus:ring-gold-500/15" type="tel" autocomplete="tel" />
            <span v-if="errors.phone" class="text-sm text-red-600">{{ errors.phone }}</span>
          </label>

          <label class="grid gap-2">
            <span class="text-sm font-semibold text-navy-900">Mensagem</span>
            <textarea v-model="form.message" class="min-h-36 rounded-md border border-slate-200 px-4 py-3 outline-none transition focus:border-gold-500 focus:ring-4 focus:ring-gold-500/15" />
            <span v-if="errors.message" class="text-sm text-red-600">{{ errors.message }}</span>
          </label>

          <button class="inline-flex items-center justify-center rounded-md bg-navy-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-navy-800 disabled:cursor-wait disabled:opacity-70" type="submit" :disabled="contactStore.isSubmitting">
            {{ contactStore.isSubmitting ? 'Enviando...' : 'Enviar solicitação' }}
          </button>
          <p v-if="contactStore.successMessage" class="rounded-md bg-emerald-50 px-4 py-3 text-sm text-emerald-700">{{ contactStore.successMessage }}</p>
          <p v-if="contactStore.errorMessage" class="rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">{{ contactStore.errorMessage }}</p>
        </form>
      </div>

      <aside class="rounded-md bg-navy-900 p-6 text-white shadow-premium sm:p-8">
        <h2 class="text-2xl font-semibold">Atendimento consultivo</h2>
        <p class="mt-4 text-sm leading-6 text-white/70">
          Para respostas mais rápidas, chame no WhatsApp e informe se o caso envolve nome negativado, negociação de dívida ou cobrança amigável.
        </p>
        <a :href="whatsappUrl" target="_blank" rel="noopener noreferrer" class="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-gold-500 px-5 py-4 text-sm font-semibold text-navy-950 transition hover:bg-gold-400">
          <MessageCircle class="h-4 w-4" />
          Conversar pelo WhatsApp
        </a>
        <div class="mt-8 grid gap-5 text-sm text-white/72">
          <span class="flex gap-3"><Phone class="h-5 w-5 text-gold-300" /> {{ company.phoneLabel }}</span>
          <span class="flex gap-3"><Mail class="h-5 w-5 text-gold-300" /> {{ company.email }}</span>
          <span class="flex gap-3"><MapPin class="h-5 w-5 text-gold-300" /> {{ company.address }}</span>
        </div>
      </aside>
    </div>
  </section>
</template>

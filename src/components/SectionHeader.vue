<script setup lang="ts">
defineProps<{
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
}>();
</script>

<template>
  <div :class="align === 'center' ? 'mx-auto text-center' : ''" class="max-w-3xl">
    <p v-if="eyebrow" class="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-gold-500">{{ eyebrow }}</p>
    <h2 class="text-3xl font-semibold tracking-normal text-navy-900 sm:text-4xl">{{ title }}</h2>
    <p v-if="description" class="mt-4 text-base leading-7 text-slate-600">{{ description }}</p>
  </div>
</template>

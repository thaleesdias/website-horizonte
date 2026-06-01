<script setup lang="ts">
import SiteFooter from '@/components/SiteFooter.vue';
import SiteHeader from '@/components/SiteHeader.vue';
import WhatsAppFloat from '@/components/WhatsAppFloat.vue';
</script>

<template>
  <div class="min-h-screen bg-porcelain text-ink">
    <SiteHeader />
    <main>
      <RouterView />
    </main>
    <SiteFooter />
    <WhatsAppFloat />
  </div>
</template>

import { createRouter, createWebHistory } from 'vue-router';

import ContactPage from '@/pages/ContactPage.vue';
import HomePage from '@/pages/HomePage.vue';
import ServicesPage from '@/pages/ServicesPage.vue';
import AboutPage from '@/pages/AboutPage.vue';

export const router = createRouter({
  history: createWebHistory(),
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' };
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomePage,
      meta: { title: 'Recuperação de Crédito com Estratégia' },
    },
    {
      path: '/sobre',
      name: 'Sobre',
      component: AboutPage,
      meta: { title: 'Sobre' },
    },
    {
      path: '/servicos',
      name: 'Serviços',
      component: ServicesPage,
      meta: { title: 'Serviços' },
    },
    {
      path: '/contato',
      name: 'Contato',
      component: ContactPage,
      meta: { title: 'Contato' },
    },
  ],
});

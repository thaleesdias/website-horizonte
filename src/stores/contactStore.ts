import { defineStore } from 'pinia';

import { submitContact, type ContactPayload } from '@/services/contactService';

interface ContactState {
  isSubmitting: boolean;
  successMessage: string;
  errorMessage: string;
}

export const useContactStore = defineStore('contact', {
  state: (): ContactState => ({
    isSubmitting: false,
    successMessage: '',
    errorMessage: '',
  }),
  actions: {
    async send(payload: ContactPayload) {
      this.isSubmitting = true;
      this.successMessage = '';
      this.errorMessage = '';

      try {
        const response = await submitContact(payload);
        this.successMessage = `Recebemos sua mensagem. Protocolo ${response.protocol}.`;
        return response;
      } catch {
        this.errorMessage = 'Não foi possível enviar agora. Tente novamente pelo WhatsApp.';
        throw new Error(this.errorMessage);
      } finally {
        this.isSubmitting = false;
      }
    },
  },
});

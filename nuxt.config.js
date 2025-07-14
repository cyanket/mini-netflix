// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Mini Netflix',
      meta: [
        { name: 'description', content: 'A simple movie browsing app' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/netflix-logo.svg' },
      ],
    },
  },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      omdbApiKey: 'aa336af4',
    },
  }
})
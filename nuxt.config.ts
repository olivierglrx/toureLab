export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    'nuxt-icon',
    '@nuxtjs/tailwindcss'
  ],
  components: [
    {
      path: '~/components', 
      pathPrefix: false,
    },
  ],
  css: [
    "primevue/resources/themes/lara-light-indigo/theme.css",
    "primevue/resources/primevue.min.css",
    "primeicons/primeicons.css",
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],
  build: {
    transpile: ["primevue"]
  },

})


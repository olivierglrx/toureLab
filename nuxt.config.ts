// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: [
    {
      path: '~/components', // will get any components nested in let's say /components/test too
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

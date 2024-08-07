// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'EmpowerHer Center'
    }
  },
  css: ['/assets/css/general.css'],
  modules: ['@pinia/nuxt', '@hebilicious/form-actions-nuxt'],
  pinia: {
    autoImports: ['defineStore']
  },
  hub: {
    database: true
  }
})
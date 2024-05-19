// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: 'EmpowerHer Center'
    }
  },
  css: ['/assets/css/general.css'],
  modules: ['@pinia/nuxt'],
  pinia: {
    autoImports: ['defineStore']
  }
})

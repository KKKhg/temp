// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      api_url: ''
    }
  },

  modules: ["@pinia/nuxt"]
})
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      'postcss-import': {},
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  typescript: {
    shim: false,
    typeCheck: true,
    strict: true
  },
  modules: ['@element-plus/nuxt'],
  app:{
    baseURL:'/nuxt-image-picker/',
  },
})

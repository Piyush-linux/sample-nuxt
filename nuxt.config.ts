import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
target: 'static',
 router: {
    base:'/sample-nuxt/'
  },
    css: [
    // Load a Node.js module directly (here it's a Sass file)
    'bulma/css/bulma.min.css',
  ]
})

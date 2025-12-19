export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  ssr: true,
  nitro: {
    preset: 'static'
  },
  app:{
    head:{
      title: 'TechNav - Your Gateway to Technology',
      meta: [
        { 
          name: 'description', 
          content: 'Explore the latest in technology with TechNav. Stay updated with news, reviews, and insights on cutting-edge tech trends.' 
        }
      ]
    }
  }
})

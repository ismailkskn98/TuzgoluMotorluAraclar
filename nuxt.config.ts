// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  experimental: {
    payloadExtraction: false,
  },
  css: [
    // SCSS file in the project
    '~/assets/css/main.scss', // you should add main.scss somewhere in your app
  ],
  modules: ['@vueuse/motion/nuxt', 'vue3-carousel-nuxt', 'nuxt-swiper'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'tr'
      },
      title: 'Tuzgölü Motorlu Araçlar',
      meta: [
        // Meta Tags
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Tuzgölü Motorlu Araçlar mercedes Benz hafif ticari (sprinter) araçlarınızın mekanik tamir bakım ve yedek parça Tedariğinin yapılması, yolda kalınan durumlarda yol yardımının sağlanması amacıyla sizler için vardır.' },
        { name: 'keywords', content: 'tuzgölü, tuzgölümotor, tuzgölümotorluaraçlar, ankaramotor, ankaramotorluaraçlar, dolmuş, mercedes' },
        { name: 'distribution', content: 'global' },
        { name: 'copyright', content: 'Copyright © 2024 Tuzgölü Motorlu Araçlar tescillenmiş markadır, Tüm Hakları Saklıdır.' },
        { name: 'content-language', content: 'tr' },
        { name: 'author', content: 'ismailKeskin - metoyazilim - metoyazilim.com' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Tuzgölü Motorlu Araçlar' },

        // For Robots
        { name: 'robots', content: 'index,follow' },
      ],
      link: [
        { rel: 'canonical', href: 'https://www.tuzgolumotorluaraclar.com/' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
          integrity: 'sha512-iecdLmaskl7CVkqkXNQ/ZH/XLlvWZOJyj7Yy7tcenmpD1ypASozpmT/E0iPtmFIB46ZmdtAc9eNBvH0H/ZpiBw==', crossorigin: 'anonymous', referrerpolicy: 'no-referrer'
        },
        { rel: 'stylesheet', href: 'https://unpkg.com/swiper/swiper-bundle.min.css' },
      ],
      script: [
        { src: "https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" },
        { src: 'https://unpkg.com/swiper/swiper-bundle.min.js', body: true },
      ]
    },
  }
})
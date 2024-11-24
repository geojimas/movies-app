// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: {enabled: false},
    modules: ['@nuxtjs/tailwindcss', '@nuxt/image'],
    image: {
        format: ['jpg']
    },
    runtimeConfig: {
        public: {
            // Public variables (available client-side)
            apiUrl: process.env.NUXT_PUBLIC_BASE_URI,
            apiToken: process.env.NUXT_PUBLIC_API_KEY,
        },
    },
})

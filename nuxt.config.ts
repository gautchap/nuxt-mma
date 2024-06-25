// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    image: {
        providers: {
            espn: {
                provider: "@/providers/espn.ts",
                options: { baseURL: "https://a.espncdn.com/i/headshots/mma/players/full/" },
            },
        },
    },

    devtools: { enabled: true },

    $production: {
        nitro: {
            storage: {
                cache: {
                    driver: "fs",
                    base: "cache",
                },
            },
        },
    },
    $development: {
        nitro: {
            storage: {
                events: {
                    driver: "fs",
                    base: "events",
                },
            },
        },
    },

    modules: ["@nuxt/image", "@nuxtjs/tailwindcss"],
});
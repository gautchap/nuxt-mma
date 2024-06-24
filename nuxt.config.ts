// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
});

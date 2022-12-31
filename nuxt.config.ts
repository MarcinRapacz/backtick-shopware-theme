// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["./modules/nuxt-shopware-cache/module.ts"],
  nitro: {
    storage: {
      redis: {
        driver: "redis",
      },
    },
  },
});

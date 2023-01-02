// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["./modules/nuxt-shopware-cache/module"],
  nitro: {
    storage: {
      db: {
        driver: "fs",
        base: "./data/db",
      },
    },
  },
});

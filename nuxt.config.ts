// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["./modules/nuxt-shopware-cache/module.ts"],
  nitro: {
    storage: {
      redis: {
        driver: "redis",
        port: process.env.REDIS_PORT || 6379,
        host: process.env.REDIS_HOST || "127.0.0.1",
        username: process.env.REDIS_USERNAME || "",
        password: process.env.REDIS_PASSWORD || "",
      },
    },
  },
});

import { defineNuxtPlugin, useFetch } from "#app";

export default defineNuxtPlugin(async (nuxtApp) => {
  const response = await useFetch("/api/get-admin");

  if (!response?.data?.value) {
    return;
  }

  nuxtApp.provide("salesChannel", response.data.value.salesChannel);
});

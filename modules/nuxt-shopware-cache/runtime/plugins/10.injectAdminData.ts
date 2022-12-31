import { defineNuxtPlugin } from "#app";
import { ISalesChannel } from "@/modules/nuxt-shopware-cache/interfaces/ISalesChannel";

export default defineNuxtPlugin(async () => {
  const salesChannel = useState<ISalesChannel | null>("salesChannel");

  if (!salesChannel.value) {
    const response = await $fetch("/api/get-admin");
    salesChannel.value = response.salesChannel;
  }
});

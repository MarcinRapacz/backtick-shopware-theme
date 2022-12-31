import { defineNuxtPlugin } from "#app";
import { ISalesChannel } from "@/modules/nuxt-shopware-cache/interfaces/ISalesChannel";

export default defineNuxtPlugin(async () => {
  const salesChannel = useState<ISalesChannel | null>("salesChannel");

  if (!salesChannel.value) {
    const response = await $fetch("/api/get-admin");

    if (!response.salesChannel) {
      const syncResponse = await $fetch("/api/sync-admin", {
        method: "PUT",
      });
      salesChannel.value = syncResponse.salesChannel;
    } else {
      salesChannel.value = response.salesChannel;
    }
  }
});

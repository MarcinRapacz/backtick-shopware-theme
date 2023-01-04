import { defineNuxtPlugin } from "#app";
import { ISalesChannel } from "../../interfaces/ISalesChannel";

export default defineNuxtPlugin(async () => {
  const time1 = new Date().getTime();

  const salesChannel = useState<ISalesChannel | null>("salesChannel");

  if (!salesChannel.value) {
    try {
      const response = await $fetch("/api/cache/sales-channel");
      salesChannel.value = response.salesChannel;
    } catch (error) {
      await $fetch("/api/sync-admin", {
        method: "PUT",
      });
      const response = await $fetch("/api/cache/sales-channel");
      salesChannel.value = response.salesChannel;
    }
  }
  const time2 = new Date().getTime();
  console.log("10.injectAdminData: ", time2 - time1);
});

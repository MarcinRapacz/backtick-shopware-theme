import { salesChannelUtils } from "@/modules/nuxt-shopware-cache/runtime/utils";

export default defineEventHandler(async (_event) => {
  const salesChannel = await salesChannelUtils.getSalesChannel();

  return { salesChannel };
});

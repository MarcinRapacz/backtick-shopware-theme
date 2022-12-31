import {
  authUtils,
  salesChannelUtils,
} from "@/modules/nuxt-shopware-cache/runtime/utils";

const clearTempStorage = async () => {
  const keys = (await useStorage().getKeys()).filter((key: string) =>
    key.includes("redis:temp")
  );
  return Promise.all(keys.map((key: string) => useStorage().removeItem(key)));
};

export default defineEventHandler(async (_event) => {
  await authUtils.getBearerToken();

  await salesChannelUtils.syncSalesChannel();

  await clearTempStorage();

  return {
    message: "ok",
  };
});

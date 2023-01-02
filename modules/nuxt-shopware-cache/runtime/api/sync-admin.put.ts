import { authUtils, salesChannelUtils, snippetUtils } from "../utils";

const clearTempStorage = async () => {
  const keys = (await useStorage().getKeys()).filter((key: string) =>
    key.includes("redis:temp")
  );
  return Promise.all(keys.map((key: string) => useStorage().removeItem(key)));
};

export default defineEventHandler(async (_event) => {
  await authUtils.getBearerToken();

  const salesChannel = await salesChannelUtils.syncSalesChannel();
  await snippetUtils.syncSnippets({
    setIds: salesChannel.domains.map((domain) => domain.snippetSetId),
  });

  await clearTempStorage();

  return {
    message: "ok",
    salesChannel,
  };
});

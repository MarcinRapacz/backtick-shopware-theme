import { getBearerToken } from "../../utils/auth";
import { syncSalesChannel } from "../../utils/salesChannel";

const clearTempStorage = async () => {
  const keys = (await useStorage().getKeys()).filter((key: string) =>
    key.includes("redis:temp")
  );
  return Promise.all(keys.map((key: string) => useStorage().removeItem(key)));
};

export default defineEventHandler(async (_event) => {
  await getBearerToken();

  await syncSalesChannel();

  await clearTempStorage();

  return {
    message: "ok",
  };
});

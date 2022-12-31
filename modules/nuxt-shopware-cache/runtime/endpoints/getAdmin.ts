import { getSalesChannel } from "../../utils/salesChannel";

export default defineEventHandler(async (_event) => {
  const salesChannel = await getSalesChannel();

  return { salesChannel };
});

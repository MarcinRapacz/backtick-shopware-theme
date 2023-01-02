import { salesChannelUtils } from "@/modules/nuxt-shopware-cache/runtime/utils";

export default defineEventHandler(async (_event) => {
  try {
    const salesChannel = await salesChannelUtils.getSalesChannel();

    if (!salesChannel) {
      return createError({
        statusCode: 404,
        statusMessage: "Sales channel not found",
      });
    }

    return { salesChannel };
  } catch (error) {
    console.error({ error });
    return createError({
      statusCode: 500,
      statusMessage: "Something went wrong",
    });
  }
});

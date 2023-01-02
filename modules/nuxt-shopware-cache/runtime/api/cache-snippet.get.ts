import { snippetUtils } from "../utils";

export default defineEventHandler(async (event) => {
  try {
    const { setId } = event.context.params;
    const snippets = await snippetUtils.getSnippet(setId);

    if (!snippets) {
      return createError({
        statusCode: 404,
        statusMessage: "Snippets not found",
      });
    }

    return {
      message: "ok",
      setId,
      snippets,
    };
  } catch (error) {
    console.error({ error });
    return createError({
      statusCode: 500,
      statusMessage: "Something went wrong",
    });
  }
});

import { redisUtils } from "@/modules/nuxt-shopware-cache/runtime/utils";
import { ISnippetResponse } from "../../interfaces/ISnippetResponse";

export const getSnippet = (setId: string): Promise<Record<string, string>> => {
  const test = useStorage().getItem(
    `${redisUtils.keys.admin.snippets}[${setId}]`
  );
  return test;
};

const storeSnippet = async (snippets: ISnippetResponse["data"]) => {
  const tempSnippets: Record<string, string> = {};
  snippets.forEach((snippet) => {
    tempSnippets[snippet.translationKey] = snippet.value;
  });

  await useStorage().setItem(
    `${redisUtils.keys.admin.snippets}[${snippets[0].setId}]`,
    tempSnippets
  );
  return tempSnippets;
};

export const syncSnippets = async (params: {
  translationKey?: string;
  setIds: string[];
}): Promise<void> => {
  try {
    const snippets = await Promise.all(
      params.setIds.map((setId) =>
        fetchSnippet({ setId, translationKey: params.translationKey })
      )
    );

    snippets.map((snippet) => storeSnippet(snippet));
  } catch (e) {
    await useStorage().removeItem(redisUtils.keys.admin.salesChannel);
    throw new Error(`syncSnippets: ${e}`);
  }
};

const fetchSnippet = async (params: {
  translationKey?: string;
  setId: string;
}): Promise<ISnippetResponse["data"]> => {
  const { API_URL } = process.env;
  const token = await useStorage().getItem(redisUtils.keys.temp.token);

  const url = `${API_URL}/api/search/snippet`;
  const response = await $fetch<ISnippetResponse>(url, {
    method: "post",
    body: {
      filter: [
        {
          type: "contains",
          field: "translationKey",
          value: params.translationKey ?? "headless.",
        },
        {
          type: "equals",
          field: "setId",
          value: params.setId,
        },
      ],
      includes: {
        snippet: ["translationKey", "value", "setId"],
      },
    },
    headers: {
      Authorization: token,
    },
  });

  return response.data;
};

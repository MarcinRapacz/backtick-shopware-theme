import { useNuxtApp } from "#app";
import { IDomain } from "~~/modules/nuxt-shopware-cache/interfaces/IDomain";
import { ISnippetSet } from "@/modules/nuxt-shopware-cache/interfaces/ISnippetSet";

interface IUseSnippetSet {
  snippetSets: ISnippetSet[];
}

export const useSnippetSet = (): IUseSnippetSet => {
  const nuxtApp = useNuxtApp();

  return {
    snippetSets: nuxtApp.$salesChannel.domains.map(
      (domain: IDomain) => domain.snippetSet
    ),
  };
};

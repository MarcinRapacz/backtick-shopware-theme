import { useNuxtApp } from "#app";
import { ISalesChannelDomain } from "@/modules/nuxt-shopware-cache/interfaces/ISalesChannelDomain";
import { ISnippetSet } from "@/modules/nuxt-shopware-cache/interfaces/ISnippetSet";

interface IUseSnippetSet {
  snippetSets: ISnippetSet[];
}

export const useSnippetSet = (): IUseSnippetSet => {
  const nuxtApp = useNuxtApp();

  return {
    snippetSets: nuxtApp.$salesChannel.domains.map(
      (domain: ISalesChannelDomain) => domain.snippetSet
    ),
  };
};

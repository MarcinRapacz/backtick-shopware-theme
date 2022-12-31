import { useNuxtApp } from "#app";
import { ISalesChannelDomain } from "../../interfaces/ISalesChannelDomain";
import { ISnippetSet } from "../../interfaces/ISnippetSet";

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

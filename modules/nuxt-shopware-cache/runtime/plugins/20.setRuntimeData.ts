import { defineNuxtPlugin } from "#app";
import {
  useLanguage,
  useDomain,
  useSalesChannel,
  useCurrency,
  useSnippetSet,
} from "#imports";

export default defineNuxtPlugin(async (nuxtApp) => {
  const { salesChannel } = useSalesChannel();
  const { setDomain } = useDomain();
  const { setLanguage } = useLanguage();
  const { setCurrency } = useCurrency();
  const { setSnippetSet } = useSnippetSet();
  // TODO: set domain by prefix in url
  const domain = salesChannel.value.domains[0];
  setDomain(domain.id);
  setLanguage(domain.languageId);
  setCurrency(domain.currencyId);
  setSnippetSet(domain.snippetSetId);
});

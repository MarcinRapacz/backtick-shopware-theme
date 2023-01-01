import { createI18n } from "vue-i18n";

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
  await setSnippetSet(domain.snippetSetId);

  const i18n = createI18n({
    locale: domain.snippetSet.id,
    fallbackLocale: domain.snippetSet.id,
    messages:
      useState<Record<string, Record<string, string>>>(`snippets`).value,
    legacy: true,
  });

  nuxtApp.vueApp.use(i18n);

  return {
    provide: {
      i18n,
    },
  };
});

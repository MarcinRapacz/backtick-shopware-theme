import { createI18n } from "vue-i18n";

import { defineNuxtPlugin } from "#app";
import {
  useLanguage,
  useDomain,
  useSalesChannel,
  useCurrency,
  useSnippetSet,
} from "#imports";
import { IDomain } from "../../interfaces/IDomain";

export default defineNuxtPlugin(async (nuxtApp) => {
  const requestEvent = useRequestEvent();
  const { salesChannel } = useSalesChannel();
  const { setDomain, domains, selectedDomain } = useDomain();
  const { setLanguage } = useLanguage();
  const { setCurrency } = useCurrency();
  const { setSnippetSet } = useSnippetSet();
  // TODO: set domain by prefix in url

  if (process.server) {
    const prefix = domains.value
      .map((domain) => domain.path)
      .filter((path) => path !== "/")
      .find((path) => requestEvent.node.req.url?.startsWith(path));

    let domain: IDomain | undefined;
    if (prefix) {
      domain = domains.value.find((domain) => domain.path === prefix);
    } else {
      domain = domains.value.find((domain) => domain.path === "/");
    }
    if (!domain) {
      domain = domains.value[0];
    }

    setDomain(domain.id);
  }

  if (!selectedDomain.value) {
    throw new Error("No domain is selected");
  }

  setLanguage(selectedDomain.value.languageId);
  setCurrency(selectedDomain.value.currencyId);
  await setSnippetSet(selectedDomain.value.snippetSetId);

  const i18n = createI18n({
    locale: selectedDomain.value.snippetSet.id,
    fallbackLocale: selectedDomain.value.snippetSet.id,
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

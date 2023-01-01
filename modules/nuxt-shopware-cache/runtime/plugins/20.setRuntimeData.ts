import { createI18n } from "vue-i18n";

const messages = {
  "6d0802747d064d8aa2a6003671ca45a1": {
    message: {
      hello: "Hello -de",
    },
  },
  dd6b45b777b94556a1cd088a36e13392: {
    message: {
      hello: "Hi - en",
    },
  },
  "2efdec7ecd3842249c14e42a53b7a2fc": {
    message: {
      hello: "Czesc - pl",
    },
  },
};

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

  const i18n = createI18n({
    locale: domain.snippetSet.id,
    fallbackLocale: domain.snippetSet.id,
    messages,
    legacy: true,
  });

  nuxtApp.vueApp.use(i18n);

  return {
    provide: {
      i18n,
    },
  };
});

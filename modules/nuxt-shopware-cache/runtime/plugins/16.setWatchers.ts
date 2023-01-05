import { watchEffect } from "vue";

import { defineNuxtPlugin } from "#app";
import { useLanguage, useDomain, useCurrency, useSnippetSet } from "#imports";

export default defineNuxtPlugin(async () => {
  const { selectedDomain } = useDomain();
  const { setLanguage } = useLanguage();
  const { setCurrency } = useCurrency();
  const { setSnippetSet } = useSnippetSet();

  watchEffect(() => {
    if (selectedDomain.value) {
      setLanguage(selectedDomain.value.languageId);
      setCurrency(selectedDomain.value.currencyId);
      setSnippetSet(selectedDomain.value.snippetSetId);
    }
  });
});

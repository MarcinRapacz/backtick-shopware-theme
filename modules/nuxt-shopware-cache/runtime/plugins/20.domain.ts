import { defineNuxtPlugin } from "#app";
import { useLanguage, useDomain, useSalesChannel } from "#imports";

export default defineNuxtPlugin(async (nuxtApp) => {
  const { salesChannel } = useSalesChannel();
  const { setDomain } = useDomain();
  const { setLanguage } = useLanguage();
  // TODO: set domain by prefix in url
  const domain = salesChannel.value?.domains[0];
  if (domain) {
    setDomain(domain.id);
    setLanguage(domain.languageId);
  }
});

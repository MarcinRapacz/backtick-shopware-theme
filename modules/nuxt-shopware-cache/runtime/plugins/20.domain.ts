import { defineNuxtPlugin } from "#app";
import { useLanguage, useSalesChannelDomains } from "#imports";

export default defineNuxtPlugin(async (nuxtApp) => {
  const { setSalesChannelDomain } = useSalesChannelDomains();
  const { setLanguage } = useLanguage();
  // TODO: set domain by prefix in url
  const domain = nuxtApp.$salesChannel.domains[0];
  setSalesChannelDomain(domain.id);
  setLanguage(domain.languageId);
});

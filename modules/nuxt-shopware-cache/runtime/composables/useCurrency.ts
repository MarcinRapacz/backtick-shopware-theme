import { useNuxtApp } from "#app";
import { ICurrency } from "@/modules/nuxt-shopware-cache/interfaces/ICurrency";
import { ISalesChannelDomain } from "@/modules/nuxt-shopware-cache/interfaces/ISalesChannelDomain";

interface IUseCurrency {
  currencies: ICurrency[];
}

export const useCurrency = (): IUseCurrency => {
  const nuxtApp = useNuxtApp();

  return {
    currencies: nuxtApp.$salesChannel.domains.map(
      (domain: ISalesChannelDomain) => domain.currency
    ),
  };
};

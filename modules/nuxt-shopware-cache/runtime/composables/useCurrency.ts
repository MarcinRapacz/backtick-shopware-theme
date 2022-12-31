import { useNuxtApp } from "#app";
import { ICurrency } from "@/modules/nuxt-shopware-cache/interfaces/ICurrency";
import { IDomain } from "~~/modules/nuxt-shopware-cache/interfaces/IDomain";

interface IUseCurrency {
  currencies: ICurrency[];
}

export const useCurrency = (): IUseCurrency => {
  const nuxtApp = useNuxtApp();

  return {
    currencies: nuxtApp.$salesChannel.domains.map(
      (domain: IDomain) => domain.currency
    ),
  };
};

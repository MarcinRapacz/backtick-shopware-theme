import { useNuxtApp } from "#app";
import { ICurrency } from "../../interfaces/ICurrency";
import { ISalesChannelDomain } from "../../interfaces/ISalesChannelDomain";

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

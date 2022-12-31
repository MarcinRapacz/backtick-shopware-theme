import { useNuxtApp } from "#app";
import { ISalesChannel } from "@/modules/nuxt-shopware-cache/interfaces/ISalesChannel";

interface IUseSalesChannel {
  salesChannel: ISalesChannel;
}

export const useSalesChannel = (): IUseSalesChannel => {
  const nuxtApp = useNuxtApp();

  return {
    salesChannel: nuxtApp.$salesChannel,
  };
};

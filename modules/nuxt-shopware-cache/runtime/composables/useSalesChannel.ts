import { Ref } from "vue";
import { ISalesChannel } from "@/modules/nuxt-shopware-cache/interfaces/ISalesChannel";

interface IUseSalesChannel {
  salesChannel: Ref<ISalesChannel | null>;
}

export const useSalesChannel = (): IUseSalesChannel => {
  const salesChannel = useState<ISalesChannel | null>("salesChannel");

  return {
    salesChannel,
  };
};

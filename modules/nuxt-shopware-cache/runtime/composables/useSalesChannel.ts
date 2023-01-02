import { Ref } from "vue";
import { ISalesChannel } from "../../interfaces/ISalesChannel";

interface IUseSalesChannel {
  salesChannel: Ref<ISalesChannel>;
}

export const useSalesChannel = (): IUseSalesChannel => {
  const salesChannel = useState<ISalesChannel>("salesChannel");

  return {
    salesChannel,
  };
};

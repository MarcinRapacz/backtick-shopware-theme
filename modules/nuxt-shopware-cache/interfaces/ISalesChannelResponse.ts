import { ISalesChannel } from "@/modules/nuxt-shopware-cache/interfaces/ISalesChannel";

export interface ISalesChannelResponse {
  total: number;
  data: ISalesChannel[];
  aggregations: unknown[];
}

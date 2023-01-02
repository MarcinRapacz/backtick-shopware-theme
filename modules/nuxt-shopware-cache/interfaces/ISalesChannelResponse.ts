import { ISalesChannel } from "./ISalesChannel";

export interface ISalesChannelResponse {
  total: number;
  data: ISalesChannel[];
  aggregations: unknown[];
}

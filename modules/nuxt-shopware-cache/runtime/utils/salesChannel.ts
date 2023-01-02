import { ISalesChannel } from "../../interfaces/ISalesChannel";
import { ISalesChannelResponse } from "../../interfaces/ISalesChannelResponse";
import { redisUtils } from ".";

export const getSalesChannel = async (): Promise<ISalesChannel | null> => {
  return useStorage().getItem(
    redisUtils.keys.admin.salesChannel
  ) as ISalesChannel | null;
};

export const syncSalesChannel = async (): Promise<ISalesChannel> => {
  try {
    const salesChannel = await fetchSalesChannel();
    await useStorage().setItem(
      redisUtils.keys.admin.salesChannel,
      salesChannel
    );
    return salesChannel;
  } catch (e) {
    await useStorage().removeItem(redisUtils.keys.admin.salesChannel);
    throw new Error(`syncSalesChannel: ${e}`);
  }
};

const fetchSalesChannel = async (): Promise<ISalesChannel> => {
  const { API_URL, API_ACCESS_TOKEN } = process.env;
  const token = await useStorage().getItem(redisUtils.keys.temp.token);

  const url = `${API_URL}/api/search/sales-channel`;
  const response = await $fetch<ISalesChannelResponse>(url, {
    method: "post",
    body: {
      filter: {
        accessKey: process.env.API_ACCESS_TOKEN,
      },
      associations: {
        domains: {
          associations: {
            language: {},
            currency: {},
            snippetSet: {},
          },
        },
      },
    },
    headers: {
      Authorization: token,
    },
  });

  return response.data[0];
};

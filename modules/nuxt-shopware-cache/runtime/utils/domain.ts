import { ISalesChannel } from "../../interfaces/ISalesChannel";

export const addPathToDomain = (salesChannel: ISalesChannel) => {
  salesChannel.domains = salesChannel.domains.map((domain) => {
    try {
      const { host } = new URL(domain.url);
      domain.path = domain.url.split(host)[1] || "/";
    } catch (error) {
      console.error(`Invalid host: ${domain.url}` + error);
      domain.path = "/";
    }
    return domain;
  });

  return salesChannel;
};

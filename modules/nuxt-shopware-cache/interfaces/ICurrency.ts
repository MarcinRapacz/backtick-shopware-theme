export interface ICurrency {
  isoCode: string;
  factor: number;
  symbol: string;
  shortName: string;
  name: string;
  position: number;
  translations: unknown;
  orders: unknown;
  salesChannels: unknown;
  salesChannelDefaultAssignments: unknown;
  salesChannelDomains: unknown;
  shippingMethodPrices: unknown;
  promotionDiscountPrices: unknown;
  isSystemDefault: boolean;
  productExports: unknown;
  countryRoundings: unknown;
  itemRounding: {
    decimals: number;
    interval: number;
    roundForNet: boolean;
    extensions: unknown[];
    apiAlias: string;
  };
  totalRounding: {
    decimals: number;
    interval: number;
    roundForNet: boolean;
    extensions: unknown[];
    apiAlias: string;
  };
  taxFreeFrom: number;
  _uniqueIdentifier: string;
  versionId: unknown;
  translated: {
    shortName: string;
    name: string;
    customFields: unknown[];
  };
  createdAt: Date;
  updatedAt: unknown;
  extensions: {
    foreignKeys: {
      apiAlias: unknown;
      extensions: unknown[];
    };
    internal_mapping_storage: {
      apiAlias: unknown;
      extensions: unknown[];
    };
  };
  id: string;
  customFields: unknown;
  apiAlias: "currency";
}

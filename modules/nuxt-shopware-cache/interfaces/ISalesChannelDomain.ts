import { ICurrency } from "./ICurrency";
import { ILanguage } from "./ILanguage";
import { ISnippetSet } from "./ISnippetSet";

export interface ISalesChannelDomain {
  url: string;
  currencyId: string;
  currency: ICurrency;
  snippetSetId: string;
  snippetSet: ISnippetSet;
  salesChannelId: string;
  salesChannel: unknown;
  languageId: string;
  language: ILanguage;
  productExports: unknown;
  salesChannelDefaultHreflang: unknown;
  hreflangUseOnlyLocale: boolean;
  _uniqueIdentifier: string;
  versionId: unknown;
  translated: [];
  createdAt: Date;
  updatedAt: unknown;
  extensions: {
    foreignKeys: {
      apiAlias: unknown;
      extensions: unknown[];
    };
  };
  id: string;
  customFields: unknown;
  apiAlias: "sales_channel_domain";
}

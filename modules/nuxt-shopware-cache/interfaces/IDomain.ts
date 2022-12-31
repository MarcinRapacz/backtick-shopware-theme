import { ICurrency } from "@/modules/nuxt-shopware-cache/interfaces/ICurrency";
import { ILanguage } from "@/modules/nuxt-shopware-cache/interfaces/ILanguage";
import { ISnippetSet } from "@/modules/nuxt-shopware-cache/interfaces/ISnippetSet";

export interface IDomain {
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

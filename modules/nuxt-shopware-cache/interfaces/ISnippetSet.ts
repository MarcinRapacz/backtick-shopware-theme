export interface ISnippetSet {
  name: string;
  baseFile: string;
  iso: string;
  snippets: unknown;
  salesChannelDomains: unknown;
  _uniqueIdentifier: string;
  versionId: unknown;
  translated: unknown[];
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
  apiAlias: "snippet_set";
}

import { ISnippet } from "./ISnippet";

export interface ISnippetResponse {
  total: number;
  data: ISnippet[];
  aggregations: unknown[];
}

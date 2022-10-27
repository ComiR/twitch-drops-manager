import { SHA256String } from "./types";

export type QueryHash = Lowercase<SHA256String>;
export type QueryVersion = 1;

export default interface Query {
  operationName: string;
  variables: {};
  extensions: {
    persistedQuery: {
      sha256Hash: QueryHash;
      version: QueryVersion;
    };
  };
}

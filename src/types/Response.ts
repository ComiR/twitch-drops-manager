import { AlNumString, Milliseconds } from "./types";

export type RequestId = `01GG8${Uppercase<AlNumString>}`;

export default interface Response<Data extends {}> {
  data: Data;
  extensions: {
    durationMilliseconds: Milliseconds;
    operationName: string;
    requestID: RequestId;
  };
}

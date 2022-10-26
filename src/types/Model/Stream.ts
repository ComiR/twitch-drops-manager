import { DateString, NumberString } from "../types";

export type StreamId = NumberString;

export default interface Stream {
  id: StreamId;
  createdAt: DateString;
  __typename: "Stream";
}

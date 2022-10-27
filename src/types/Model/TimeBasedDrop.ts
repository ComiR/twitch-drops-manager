import { UUID } from "../types";

export type TimeBasedDropId = UUID;

export default interface TimeBasedDrop {
  id: TimeBasedDropId;
  __typename: "TimeBasedDrop";
}

import { NumberString, UrlString } from "../types";

export type ChannelId = NumberString;
export type ChannelLogin = string;

export default interface Channel {
  id: ChannelId;
  displayName?: string;
  name: ChannelLogin;
  url?: UrlString;
  __typename: "Channel";
}

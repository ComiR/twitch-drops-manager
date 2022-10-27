import { NumberString, UrlString } from "../types";

export type GameId = NumberString;

export default interface Game {
  boxArtURL?: UrlString;
  displayName?: string;
  name?: string;
  id: GameId;
  __typename: "Game";
}

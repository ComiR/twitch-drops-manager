import { UUID } from "../types";

export type DropCampaignId = UUID;

export enum DropCampaignStatus {
  ACTIVE = "ACTIVE",
  EXPIRED = "EXPIRED",
  TEST = "TEST",
  UPCOMING = "UPCOMING",
  DISABLED = "DISABLED",
}

export default interface DropCampaign {
  id: DropCampaignId;
  __typename: "DropCampaign";
}

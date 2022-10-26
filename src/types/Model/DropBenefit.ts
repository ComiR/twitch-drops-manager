import { UrlString } from "../types";

export type DropBenefitId = string;

export default interface DropBenefit {
  id: DropBenefitId;
  imageAssetURL: UrlString;
  name: string;
  __typename: "DropBenefit";
}

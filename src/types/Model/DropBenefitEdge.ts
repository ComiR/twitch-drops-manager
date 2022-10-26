import DropBenefit from "./DropBenefit";

export default interface DropBenefitEdge {
  benefit: DropBenefit;
  entitlementLimit: number;
  __typename: "DropBenefitEdge";
}
